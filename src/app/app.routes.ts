
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {ContactComponent} from "./contact/contact.component";
const routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
];

export default RouterModule.forRoot(routes);
