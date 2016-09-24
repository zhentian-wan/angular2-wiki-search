
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
const routes = [
  {path: '', component: HomeComponent}
];

export default RouterModule.forRoot(routes);
