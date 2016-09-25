import {RouterModule} from "@angular/router";
const routes = [
  {path: '', loadChildren: 'app/home/home.module', name: 'Home'},
  {path: 'heros', loadChildren: 'app/heros/heros.module', name: 'Heros'},
  {path: 'contact', loadChildren: 'app/contact/contact.module', name: 'Contact'},
];

export default RouterModule.forRoot(routes);
