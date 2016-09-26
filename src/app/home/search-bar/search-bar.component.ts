import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {WikiSearchService} from "../../shared";

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  term$ = new Subject<string>();
  items: Observable<Array<string>>;
  search;
  @Output() searchResult = new EventEmitter();
  constructor(private wikiSearch: WikiSearchService) {
    this.wikiSearch.search(this.term$)
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
}
