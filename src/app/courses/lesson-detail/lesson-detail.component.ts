import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Course} from "../courses";
import {CourseService} from "../course.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {


  constructor(private route: ActivatedRoute, private courseService: CourseService) {

  }

  lesson: Observable<any>;
  ngOnInit() {
    /*this.route.params
      .map(p => p['id'])
    .do((id) => console.log("id is ", id))
      .switchMap(url => this.courseService.findLessonByUrl(url))
      .subscribe((lesson) => {
        console.log("lesson in id", JSON.stringify(lesson, null, 2))
        this.lesson = lesson;
      })*/

    this.route.data
      .subscribe(
        (res) => {
          console.log("res", JSON.stringify(res['lesson'], null, 2))
          this.lesson = res['lesson'];
        }
      )
  }

}
