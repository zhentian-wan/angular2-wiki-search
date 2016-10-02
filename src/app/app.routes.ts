import {RouterModule} from "@angular/router";
import {NotFoundComponent} from "./shared-components/not-found/not-found.component";
import {DetailViewComponent} from "./home/detail-view/detail-view.component";

const indexRoute = {path: '', loadChildren: 'app/home/home.module'};
const fallbackRoute = {path: '**', component: NotFoundComponent};
const routes = [
  {path: 'legacy-url', redirectTo: '/home', pathMatch: 'prefix'},
  {path: 'home', loadChildren: 'app/home/home.module', name: 'Home'},
  {path: 'heros', loadChildren: 'app/heros/heros.module', name: 'Heros'},
  {path: 'contact', loadChildren: 'app/contact/contact.module', name: 'Contact'},
  {path: 'message', loadChildren: 'app/message/message.module', name: 'Message'},
  {path: 'playground', loadChildren: 'app/playground/playground.module', name: 'Playground'},
  {path: 'realtime', loadChildren: 'app/realtime/realtime.module', name: 'Realtime'},
  {path: 'wiki-path', loadChildren: 'app/auxroute/auxroute.module', name: 'WikiDetail', outlet: 'wiki'},
  indexRoute,
  fallbackRoute,
];

export default RouterModule.forRoot(routes);
