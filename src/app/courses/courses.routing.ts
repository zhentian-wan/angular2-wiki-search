import {Routes, RouterModule} from '@angular/router';
import {CoursesComponent} from "./courses.component";
import {LessonsComponent} from "./lessons/lessons.component";

export const coursesRoutes: Routes = [
  {path: '', component: CoursesComponent},
  {path: ':url', component: LessonsComponent},
];

export const coursesRouting = RouterModule.forChild(coursesRoutes);

