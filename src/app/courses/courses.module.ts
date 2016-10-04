import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { coursesRouting } from './courses.routing';
import { CoursesComponent } from './courses.component';
import {CourseService} from "./course.service";
import {MdButtonModule} from "@angular2-material/button";

@NgModule({
  imports: [
    CommonModule,
    coursesRouting,
    MdButtonModule.forRoot()
  ],
  declarations: [CoursesComponent],
  providers: [
    CourseService
  ]
})
export default class CoursesModule { }
