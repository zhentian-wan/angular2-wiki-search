
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {StarWarsService} from "./heros.service";
import {Injectable} from "@angular/core";
@Injectable()
export class CanHeroActivateDirective implements CanActivate{

  constructor(private sws: StarWarsService){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {

    if(this.sws.people){
      const sub = new Subject<boolean>();
      setTimeout( () => {
        const id = route.params['id'];
        const hero = this.sws.people.find( (p) => {

          return Number(p.id) === Number(id);
        });
        sub.next(hero.mass !== "unknown");
        sub.complete();
      });

      return sub;
    }else{
      return true;
    }

  }

}
