import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Subject, Observable, Subscription} from 'rxjs';
import {WikiSearchService} from "../../shared";
import {Router} from "@angular/router";

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  term$ = new Subject<string>();
  items: Observable<Array<string>>;
  urls: Observable<Array<string>>;
  search;
  searchSub: Subscription;
  @Output() searchResult = new EventEmitter();
  @Output() details = new EventEmitter();

  constructor(private wikiSearch: WikiSearchService) {
    this.searchSub = this.wikiSearch.search(this.term$)
      .subscribe(res => {

        this.items = res.keys;
        this.urls = res.urls;
        this.searchResult.next(this.items);
        this.details.next(this.urls);

      });

  }

  clean(inp) {
    inp.value = "";
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.searchSub.unsubscribe();
  }
}
