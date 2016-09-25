import {RouterModule} from "@angular/router";
const routes = [
  {path: '', loadChildren: 'app/home/home.module'},
  {path: 'contact', loadChildren: 'app/contact/contact.module'},
];

export default RouterModule.forRoot(routes);
