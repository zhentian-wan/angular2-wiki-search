import {HerosComponent} from "./heros.component";
import {RouterModule} from "@angular/router";
import {HeroComponent} from "./hero/hero.component";
const routes = [
  {path: '', component: HerosComponent},
  {path: ':id', component: HeroComponent},
];
export default RouterModule.forChild(routes)
