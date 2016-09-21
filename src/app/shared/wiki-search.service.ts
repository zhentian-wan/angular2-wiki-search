import { Injectable } from '@angular/core';
import {Http, Jsonp, URLSearchParams} from "@angular/http";
import {Subject, Observable} from 'rxjs';

@Injectable()
export class WikiSearchService {

  apiUrl: string = `https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK`;
  constructor(private jsonp: Jsonp) {

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
        return res.json()[1];
      });
  }

}
