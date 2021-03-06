import {Injectable, Inject} from '@angular/core';
import {RealtimeService} from "../shared";
import {FirebaseListObservable, AngularFire, FirebaseDatabase, FirebaseRef} from "angularfire2";
import {Lesson} from "./lessons/lessons";
import {Course} from "./courses";
import {Observable, Subject} from "rxjs";

@Injectable()
export class CourseService {

  courses$: FirebaseListObservable<any>;
  lessons$: FirebaseListObservable<Lesson[]>;
  db: FirebaseDatabase;
  public lastCourse: any;
  rootDb: any;

  constructor(private rt: RealtimeService, @Inject(FirebaseRef) fb) {

    this.rootDb = fb.database().ref(); // To get the root firebase ref

    this.courses$ = rt.getCourseObs();
    this.lessons$ = rt.getLessonObs();
    this.db = rt.getDb();
    this.getLastCourse();
  }

  findCourseByUrl(courseUrl): Observable<Course> {
    return this.db.list('courses', {
      query: {
        orderByChild: 'url',
        equalTo: courseUrl
      }
    })
      .map((courses) => courses[0]); // get courses document which url = courseUrl
  }

  findLessonsKeyPreCourseUrl(courseUrl) {
    return this.findCourseByUrl(courseUrl)
      .filter(course => !!course)
      .map((course) => course.$key)
      .switchMap((courseKey) => this.db.list(`lessonsPerCourse/${courseKey}`, {
        query: {
          limitToFirst: 3,
          orderByKey: true
        }
      }));
  }

  findPreviousPageLessonsKey(courseUrl: string, end: Lesson, limit: number) {
    return this.findCourseByUrl(courseUrl)
      .filter(c => !!c)
      .switchMap((c) => this.db.list(`lessonsPerCourse/${c.$key}`, {
        query: {
          limitToLast: limit + 1,
          orderByKey: true,
          endAt: end.$key
        }
      }))
      .map(lessons => lessons.slice(0, lessons.length - 1));
  }

  findPreviousPageLessons(courseUrl: string, end: Lesson, limit: number) {
    return this.findPreviousPageLessonsKey(courseUrl, end, limit)
      .map((lessonKeys) => lessonKeys
        .map((lessonKey) => {
          return this.db.object(`lessons/${lessonKey.$key}`)
        }))
      .flatMap((res) => {
        return Observable.combineLatest(res);
      });
  }

  findNextPageLessons(courseUrl: string, from: Lesson, limit: number): Observable<Lesson[]> {
    return this.findNextPageLessonsKey(courseUrl, from, limit)
      .map((lessonKeys) => lessonKeys
        .map((lessonKey) => {
          return this.db.object(`lessons/${lessonKey.$key}`)
        }))
      .flatMap((res) => {
        return Observable.combineLatest(res);
      });
  }

  findNextPageLessonsKey(courseUrl: string, from: Lesson, limit: number) {
    return this.findCourseByUrl(courseUrl)
      .filter(c => !!c)
      .switchMap((c) => this.db.list(`lessonsPerCourse/${c.$key}`, {
        query: {
          limitToFirst: limit + 1,
          orderByKey: true,
          startAt: from.$key
        }
      }))
      .map(lessons => lessons.slice(1, lessons.length));
  }

  findAllCourseLessons(courseUrl) {
    return this.findLessonsKeyPreCourseUrl(courseUrl)
      .map((lessonKeys) => lessonKeys
        .map((lessonKey) => {
          return this.db.object(`lessons/${lessonKey.$key}`)
        }))
      .flatMap((res) => {
        return Observable.combineLatest(res);
      });
  }

  getCourses() {
    return this.courses$
      .map(Course.fromJsonList)
  }

  getLessons() {
    return this.lessons$
      .map(Lesson.fromJsonList);
  }

  findLessonByUrl(url) {
    console.log("url", url)
    return this.db.list('lessons', {
      query: {
        orderByChild: 'url',
        equalTo: url
      }
    })
      .map(res => res[0]);
  }

  addCourse(course) {
    return this.courses$.push(course)
      .then(
        success => success.key,
        err => console.error("err", err)
      );
  }

  removeCourse(course) {
    return this.courses$.remove(course)
      .then(
        () => "OK",
        err => console.error("err", err)
      );
  }

  updateCourse(course, updates) {
    return this.courses$.update(course, updates)
      .then(
        () => "OK",
        err => console.error("err", err)
      );
  }

  updateLesson(lesson, update) {
   return this.lessons$.update(lesson, update);
/*
    const lessonToSave = Object.assign({}, update);
    delete(lessonToSave.$key);
    let dataToSave = {};
    dataToSave[`lessons/${lesson.$key}`] = lessonToSave;
    const subject = new Subject();
    return this.rootDb.update(dataToSave)
      .then((val) => {
        subject.next(val);
        subject.complete();
      }, (err) => {
        subject.error(err);
        subject.complete();
      });
    return subject.asObservable();*/
  }

  getLastCourse() {
    this.courses$
      .subscribe(
        courses => {
          this.lastCourse = courses[courses.length - 1]
        }
      )
  }

  createNewLesson(courseId: string, lesson: Lesson): Observable<any> {
    const lessonToSave = Object.assign({}, lesson, {courseId});

    // Generate a new key under 'lessons' collection, db won't change currently
    const newLessonKey = this.rootDb.child('lessons').push().key;

    const dataToSave = {};
    dataToSave[`lessons/${newLessonKey}`] = lessonToSave;
    dataToSave[`lessonsPerCourse/${courseId}/${newLessonKey}`] = true;


    const subject = new Subject();
    this.rootDb.update(dataToSave)
      .then((val) => {
        subject.next(val);
        subject.complete();
      }, (err) => {
        subject.error(err);
        subject.complete();
      });
    return subject.asObservable();
  }

  deleteLEssonById(lessonId: string, courseId) {
    return this.rootDb.child('queue/tasks')
      .push({
        lessonId,
        courseId
      })
  }
}
