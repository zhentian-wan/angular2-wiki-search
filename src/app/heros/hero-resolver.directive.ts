
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {StarWarsService} from "./heros.service";
import {Injectable} from "@angular/core";

@Injectable()
export class HeroDetailResolver implements Resolve<any> {

  constructor(private startWarsService: StarWarsService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any{
    const id= route.params['id'];
    return this.startWarsService.getPersonDetail(id); // How to prevent been called multi times for the same id
  }

}
