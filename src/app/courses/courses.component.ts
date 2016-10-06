import {Component, OnInit} from '@angular/core';
import {CourseService} from "./course.service";
import {Observable} from "rxjs";
import {Lesson} from "./lessons/lessons";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  lessons: Observable<Lesson>;
  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.lessons = this.courseService.getLessons();
  }

  listPush() {
    const course = {
      courseListIcon: "",
      description: "Angular 2 Tutorial For Beginners",
      longDescription: "Establish a solid layer of fundamentals, learn ...",
      iconUrl: "https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg",
      url: "getting-started-with-angular2"
    };
    this.courseService.addCourse(course)
      .then(
        res => console.log("listPush OK")
      );
  }

  removeListElm(){
    const lastCourse = this.courseService.lastCourse;
    return this.courseService.removeCourse(lastCourse)
      .then(
        res => console.log("removeListElm OK")
      );
  }

  updateListElm(){
    const lastCourse = this.courseService.lastCourse;
    return this.courseService
      .updateCourse(lastCourse, {longDescription : 'This is updated version'})
      .then(
        res => console.log("updateListElm OK")
      )

  }

}
