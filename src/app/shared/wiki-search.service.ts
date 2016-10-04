import {Injectable, Inject} from '@angular/core';
import {Http, Jsonp, URLSearchParams} from "@angular/http";
import {Subject, Observable} from 'rxjs';
import {API_URL} from "./constance.service";

@Injectable()
export class WikiSearchService {

  constructor(private jsonp: Jsonp, @Inject(API_URL) private apiUrl) {

  }

  search(term$: Observable<string>, dtime=400){
    return term$
      .debounceTime(dtime)
      .distinctUntilChanged()
      .switchMap(term => this.rawsearch(term));
  }

  rawsearch(term: string){
    let search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');

    return this.jsonp.get(`${this.apiUrl}`, {search})
      .map( (res) => {
        const data = res.json();
        return {
          keys: [
            ...data[1]
          ],
          urls: [
            ...data[3]
          ]
        }
      });
  }

}
