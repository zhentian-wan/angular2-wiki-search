import {HerosComponent} from "./heros.component";
import {RouterModule} from "@angular/router";
import {HeroComponent} from "./hero/hero.component";
import {CanHeroDeactivate} from "./heros-can-deactivate.directive";
import {CanHeroActivateDirective} from "./heros-can-activate.directive";
import {HeroDetailResolver} from "./hero-resolver.directive";
const routes = [
  {path: '', component: HerosComponent},
  {
    path: ':id',
    component: HeroComponent,
    canDeactivate: [CanHeroDeactivate],
    canActivate: [CanHeroActivateDirective],
    resolve: {
      hero: HeroDetailResolver
    }
  },
];
export default RouterModule.forChild(routes)
