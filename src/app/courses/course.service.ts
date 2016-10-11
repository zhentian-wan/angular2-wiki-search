import {Injectable} from '@angular/core';
import {RealtimeService} from "../shared";
import {FirebaseListObservable, AngularFire, FirebaseDatabase} from "angularfire2";
import {Lesson} from "./lessons/lessons";
import {Course} from "./courses";
import {Observable} from "rxjs";

@Injectable()
export class CourseService {

  courses$: FirebaseListObservable<any>;
  lessons$: FirebaseListObservable<Lesson[]>;
  db: FirebaseDatabase;
  public lastCourse: any;

  constructor(private rt: RealtimeService) {
    this.courses$ = rt.getCourseObs();
    this.lessons$ = rt.getLessonObs();
    this.db = rt.getDb();
    this.getLastCourse();
  }

  findCourseByUrl(courseUrl): Observable<Course>{
    return this.db.list('courses', {
      query: {
        orderByChild: 'url',
        equalTo: courseUrl
      }
    })
    .map((courses) => courses[0]); // get courses document which url = courseUrl
  }

  findAllCourseLessons(courseUrl){
    const course$ = this.findCourseByUrl(courseUrl);

    const lessonsPreCourse$ = course$
      .filter(course => !!course)
      .switchMap((course) => {
        console.log(course);
        return this.db.list(`lessonsPerCourse/${course.$key}`)
      });

    return lessonsPreCourse$
      .map((lessonKeys) => lessonKeys
          .map( (lessonKey) => {
             return this.db.object(`lessons/${lessonKey.$key}`)
          }))
      .flatMap((res) => {
        return Observable.combineLatest(res);
      });

  }

  getCourses(){
    return this.courses$
      .map(Course.fromJsonList)
  }

  getLessons() {
    return this.lessons$
      .map(Lesson.fromJsonList);
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

  getLastCourse() {
    this.courses$
      .subscribe(
        courses => {
          this.lastCourse = courses[courses.length - 1]
        }
      )
  }

}
