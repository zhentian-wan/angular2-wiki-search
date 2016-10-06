import { Component, OnInit } from '@angular/core';

import {Lesson} from "./lessons";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  @Input('lessons') lessons: Array<Lesson>;
  constructor() {

  }

  ngOnInit() {
  }

}
