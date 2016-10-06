import { Component, OnInit } from '@angular/core';
import {LessonsService} from "./lessons.service";
import {Lesson} from "./lessons";

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons: Array<Lesson>;
  constructor(private lessonSerivce: LessonsService) {

  }

  ngOnInit() {
    this.lessonSerivce.getAllLessons()
      .subscribe( (lessons) => {
        this.lessons = lessons;
      });
  }

}
