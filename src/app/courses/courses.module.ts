import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { coursesRouting } from './courses.routing';
import { CoursesComponent } from './courses.component';
import {CourseService} from "./course.service";
import {MdButtonModule} from "@angular2-material/button";
import { LessonsComponent } from './lessons/lessons.component';
import {MaterialModule} from "@angular/material";
import {LessonsService} from "./lessons/lessons.service";

@NgModule({
  imports: [
    CommonModule,
    coursesRouting,
    MaterialModule.forRoot()
  ],
  declarations: [CoursesComponent, LessonsComponent],
  providers: [
    CourseService,
    LessonsService
  ]
})
export default class CoursesModule { }
