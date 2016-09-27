
import {MessageComponent} from "./message.component";
import {RouterModule} from "@angular/router";
const routes = [
  {path: '', component: MessageComponent}
];
export default RouterModule.forChild(routes);
