import {Injectable, Inject} from '@angular/core';
import {STARWARS_PEOPLE_URL} from "../shared/constance.service";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class StarWarsService {

    constructor(@Inject(STARWARS_PEOPLE_URL) private starwarUrl,
      private http: Http
    ) {}

    getPeople(){
      return this.http.get(this.starwarUrl)
        .map( res => res.json())
    }
}
