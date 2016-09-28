import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Subject, Observable, Subscription} from 'rxjs';
import {WikiSearchService} from "../../shared";

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  term$ = new Subject<string>();
  items: Observable<Array<string>>;
  search;
  searchSub: Subscription;
  @Output() searchResult = new EventEmitter();
  constructor(private wikiSearch: WikiSearchService) {
    this.searchSub = this.wikiSearch.search(this.term$)
      .subscribe( res => {
        this.items = res;
        this.searchResult.next(this.items);
      });

  }

  clean(inp){
    inp.value = "";
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.searchSub.unsubscribe();
  }
}
