import {PlaygroundComponent} from "./playground.component";
import {RouterModule} from "@angular/router";
const routes = [
  {path: '', component: PlaygroundComponent}
];
export default RouterModule.forChild(routes);
