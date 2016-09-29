import {HerosComponent} from "./heros.component";
import {RouterModule} from "@angular/router";
import {HeroComponent} from "./hero/hero.component";
import {CanHeroDeactivate} from "./CanDeactiveHero.directive";
const routes = [
  {path: '', component: HerosComponent},
  {path: ':id', component: HeroComponent, canDeactivate: [CanHeroDeactivate]},
];
export default RouterModule.forChild(routes)
