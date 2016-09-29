
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {HeroComponent} from "./hero/hero.component";
export class CanHeroDeactivate implements CanDeactivate<HeroComponent>{
  canDeactivate(component: HeroComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean>|boolean {

    if(!component.editing){
      return true;
    }

    return confirm('You have unsaved message, are you sure to leave the page?')
  }

}
