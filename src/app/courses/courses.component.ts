import {Component, OnInit} from '@angular/core';
import {CourseService} from "./course.service";
import {Lesson} from "./lessons/lessons";
import {Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  allLessons: Observable<Lesson[]>;
  filteredLessons: Observable<Lesson[]>;
  selectedIndex = 0;

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.allLessons = this.filteredLessons = this.courseService.getLessons();
    this.route.params.subscribe(
      param => {
        this.selectedIndex = param['course'] || 0;
      }
    )
  }

  search(term) {
    this.filteredLessons = this.allLessons
      .do(console.log) // lessons array
      .map(lessons => lessons.filter(
        lesson => lesson.description.indexOf(term) > -1
      ));
  }

  listCourseLessons(e) {
    this.selectedIndex = e.index;
    this.router.navigate(['courses', e.index]);
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

  removeListElm() {
    const lastCourse = this.courseService.lastCourse;
    return this.courseService.removeCourse(lastCourse)
      .then(
        res => console.log("removeListElm OK")
      );
  }

  updateListElm() {
    const lastCourse = this.courseService.lastCourse;
    return this.courseService
      .updateCourse(lastCourse, {longDescription: 'This is updated version'})
      .then(
        res => console.log("updateListElm OK")
      )

  }

}
