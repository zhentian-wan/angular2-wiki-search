import {Routes, RouterModule} from '@angular/router';
import {CoursesComponent} from "./courses.component";
import {LessonsComponent} from "./lessons/lessons.component";
import {LessonDetailComponent} from "./lesson-detail/lesson-detail.component";
import {NewLessonComponent} from "./new-lesson/new-lesson.component";

export const coursesRoutes: Routes = [
  {path: '', component: CoursesComponent},
  {path: ':url', children: [
    {path: '', component: LessonsComponent},
    {path: 'new', component: NewLessonComponent}
  ]},
  {path: ':url/:id', component: LessonDetailComponent},
];

export const coursesRouting = RouterModule.forChild(coursesRoutes);

