import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {coursesRouting} from './courses.routing';
import {CoursesComponent} from './courses.component';
import {CourseService} from "./course.service";
import {LessonsComponent} from './lessons/lessons.component';
import {MaterialModule} from "@angular/material";
import {LessonDetailComponent} from './lesson-detail/lesson-detail.component';
import {SafeUrlPipe} from "../shared/pipes/safe-url.pipe";
import {NewLessonComponent} from './new-lesson/new-lesson.component';
import {ReactiveFormsModule} from "@angular/forms";
import {LessonFormComponent} from "./lesson-form/lesson-form.component";

@NgModule({
  imports: [
    CommonModule,
    coursesRouting,
    MaterialModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    CoursesComponent,
    LessonsComponent,
    LessonDetailComponent,
    SafeUrlPipe,
    LessonFormComponent,
    NewLessonComponent],
  providers: [
    CourseService
  ]
})
export default class CoursesModule {
}
