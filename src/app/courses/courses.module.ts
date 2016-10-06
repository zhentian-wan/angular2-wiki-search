import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {coursesRouting} from './courses.routing';
import {CoursesComponent} from './courses.component';
import {CourseService} from "./course.service";
import {LessonsComponent} from './lessons/lessons.component';
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    coursesRouting,
    MaterialModule.forRoot()
  ],
  declarations: [CoursesComponent, LessonsComponent],
  providers: [
    CourseService
  ]
})
export default class CoursesModule {
}
