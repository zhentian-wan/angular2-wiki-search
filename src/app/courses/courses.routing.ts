import {Routes, RouterModule} from '@angular/router';
import {CoursesComponent} from "./courses.component";

export const coursesRoutes: Routes = [
  {path: '', component: CoursesComponent},
  {path: ':course', component: CoursesComponent},
];

export const coursesRouting = RouterModule.forChild(coursesRoutes);

