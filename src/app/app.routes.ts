import {RouterModule, PreloadAllModules} from "@angular/router";
import {NotFoundComponent} from "./shared-components/not-found/not-found.component";
import {PreloadSelectedModuledsList} from "./shared/preload-router-list";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

const indexRoute = {path: '', redirectTo: 'login', pathMatch: 'full'};
const fallbackRoute = {path: '**', component: NotFoundComponent};
const routes = [
  {path: 'legacy-url', redirectTo: '/home', pathMatch: 'prefix'},
  {path: 'login', component: LoginComponent, name: 'Login'},
  {path: 'signup', component: SignupComponent, name: 'Signup'},
  {path: 'home', loadChildren: 'app/home/home.module', name: 'Home'},
  {path: 'heros', loadChildren: 'app/heros/heros.module', name: 'Heros', data: {preload: true}},
  {path: 'contact', loadChildren: 'app/contact/contact.module', name: 'Contact', data: {preload: true}},
  {path: 'forms', loadChildren: 'app/message/message.module', name: 'Form'},
  {path: 'playground', loadChildren: 'app/playground/playground.module', name: 'Playground'},
  {path: 'realtime', loadChildren: 'app/realtime/realtime.module', name: 'Realtime'},
  {path: 'courses', loadChildren: 'app/courses/courses.module', name: 'Courses'},
  {path: 'photos', loadChildren: 'app/photos/photos.module', name: 'Photos'},
  {path: 'animation', loadChildren: 'app/myanimation/myanimation.module', name: 'Animation', data:{preload: true}},
  indexRoute,
  fallbackRoute,
];

export default RouterModule.forRoot(routes, {
  useHash: true,
  preloadingStrategy: PreloadSelectedModuledsList
  //preloadingStrategy: PreloadAllModules
});
