import { Component, OnInit } from '@angular/core';

import {Lesson} from "./lessons";
import {Input} from "@angular/core/src/metadata/directives";
import {CourseService} from "../course.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Course} from "../courses";

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

 // @Input('lessons') lessons: Array<Lesson>;

  lessons$: Observable<Lesson[]>;
  lessons: Lesson[];
  course$: Observable<Course>;
  courseUrl: string;

  constructor(private courseService: CourseService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    if(this.route.snapshot.params['url']){
      this.courseUrl = this.route.snapshot.params['url'];
      this.course$ = this.courseService.findCourseByUrl(this.courseUrl);
      this.courseService.findAllCourseLessons(this.courseUrl)
        .subscribe(lessons => this.lessons = lessons);
    }
  }

  next(){
    this.courseService.findNextPageLessons(
      this.courseUrl,
      this.lessons[this.lessons.length - 1],
      3
    )
      .subscribe(lessons => this.lessons = lessons);
  }

  previous(){
    this.courseService.findPreviousPageLessons(
      this.courseUrl,
      this.lessons[0],
      3
    )
      .subscribe(lessons => this.lessons = lessons);
  }

}
