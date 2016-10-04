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

  constructor(private wikiSearch: WikiSearchService, private router: Router) {
    this.searchSub = this.wikiSearch.search(this.term$)
      .subscribe( res => {
        this.items = res.keys;
        this.urls = res.urls;
        this.searchResult.next(this.items);
        this.details.next(this.urls);
      });

  }

  clean(inp){
    this.auxRouter(inp.value);
    inp.value = "";
  }

  auxRouter(inp){
    this.router.navigateByUrl(
      `/home(wiki:wiki-path;search=${inp})`
    )
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.searchSub.unsubscribe();
  }
}
