import { Injectable } from '@angular/core';
import {RealtimeService} from "../shared";
import {FirebaseListObservable} from "angularfire2";

@Injectable()
export class CourseService {

  courses$: FirebaseListObservable<any>;
  public lastCourse: any;

  constructor(private rt: RealtimeService) {
    this.courses$ = rt.getCourseObs();
    this.getLastCourse();
  }

  addCourse(course){
    return this.courses$.push(course)
      .then(
        success => success.key,
        err => console.error("err", err)
      );
  }

  removeCourse(course){
    return this.courses$.remove(course)
      .then(
        () => "OK",
        err => console.error("err", err)
      );
  }

  updateCourse(course, updates){
    return this.courses$.update(course, updates)
      .then(
        () => "OK",
        err => console.error("err", err)
      );
  }

  getLastCourse(){
    this.courses$
      .subscribe(
        courses => {
          this.lastCourse = courses[courses.length - 1]
        }
      )
  }

}