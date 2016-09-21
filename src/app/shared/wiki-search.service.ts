import { Injectable } from '@angular/core';
import {Http, Jsonp, URLSearchParams} from "@angular/http";

@Injectable()
export class WikiSearchService {

  apiUrl: string = `https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK`;
  constructor(private jsonp: Jsonp) {

  }

  search(term: string){
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
