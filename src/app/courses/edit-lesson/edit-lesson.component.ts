import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import {Lesson} from "../lessons/lessons";
import {CourseService} from "../course.service";

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {

  lesson: Lesson = {};
  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (res) => {
          this.lesson = res['lesson'];
        }
      )
  }

  save(updates){
    if(this.lesson) {
      this.courseService.updateLesson(this.lesson, updates)
        .then(() => {
          console.log("updated successfully");
        })
    }
  }
}
