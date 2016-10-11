import { Component, OnInit } from '@angular/core';

import {Lesson} from "./lessons";
import {Input} from "@angular/core/src/metadata/directives";
import {CourseService} from "../course.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  @Input('lessons') lessons: Array<Lesson>;

  lessons$: Observable<Lesson[]>;

  constructor(private courseService: CourseService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    if(this.route.snapshot.params['url']){
      const url = this.route.snapshot.params['url'];
      this.lessons$ = this.courseService.findAllCourseLessons(url);
    }
  }

}
