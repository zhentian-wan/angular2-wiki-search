import {Injectable, Inject} from '@angular/core';
import {STARWARS_BASE_URL} from "../shared/constance.service";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import {Observable} from "rxjs";

@Injectable()
export class StarWarsService {

    people:any;

    constructor(@Inject(STARWARS_BASE_URL) private starwarUrl,
      private http: Http
    ) {}

    getPeople(){
      return this.http.get(`${this.starwarUrl}/people`)
        .map( res => res.json())
        .do( res => this.people = res)
    }

    getPersonDetail(id){
      return this.http.get(`${this.starwarUrl}/people/${id}`)
        .map( res => res.json())
        .map( (hero:any) => Object.assign({}, hero, {
          image: `${this.starwarUrl}/${hero.image}`
        }))

    }

}
