import {Injectable} from '@angular/core';
import {RealtimeService} from "../shared";
import {FirebaseListObservable} from "angularfire2";
import {Lesson} from "./lessons/lessons";
import {Course} from "./courses";

@Injectable()
export class CourseService {

  courses$: FirebaseListObservable<any>;
  lessons$: FirebaseListObservable<Lesson[]>;
  public lastCourse: any;

  constructor(private rt: RealtimeService) {
    this.courses$ = rt.getCourseObs();
    this.lessons$ = rt.getLessonObs();
    this.getLastCourse();
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
