import {Component, OnInit} from '@angular/core';
import {CourseService} from "./course.service";
import {Lesson} from "./lessons/lessons";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  allLessons: Lesson[];
  filteredLessons: Lesson[];
  selectedIndex = 0;

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

    /**
     * THOUGHT: When using Firebase, the result implement FirebaseListObservable,
     *  Whcih is different from noraml Observable.
     *
     *  Should convert to Observable in Service by using:
     *    .subscribe(lessons =>
     *      this.lessons = Observable.from(lesson)
     *    );
     *  Then using async pipe in controller.
     *
     *
     *  Or in Controller, do subscribe here, and just remove normal array and
     *  remove async pipe?
     * */


    this.courseService.getLessons()
      .subscribe(lessons => this.allLessons = this.filteredLessons = lessons);
    this.route.params.subscribe(
      param => {
        this.selectedIndex = param['course'] || 0;
      }
    )
  }

  search(term) {
    this.filteredLessons = this.allLessons
      .filter((lesson: Lesson) => {
        return lesson.description.indexOf(term) > -1;
      })
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
