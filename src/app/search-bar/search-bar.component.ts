import {Component, OnInit, EventEmitter} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {WikiSearchService} from "../shared";
import {Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  term$ = new Subject<string>();
  items: Observable<any>;
  @Output() searchResult = new EventEmitter();
  constructor(private wikiSearch: WikiSearchService) {

    this.term$
      .debounceTime(250)
      .distinctUntilChanged()
      .subscribe(
      term =>  {
        this.items = this.wikiSearch.search(term);
        this.searchResult.emit(this.items);
      },
      err => console.error(err)
    )
  }

  ngOnInit() {
  }
}
