import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {WikiSearchService} from "../shared/wiki-search.service";

@Component({
  selector: 'result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  @Input('input') searchResult: string;
  constructor() {

  }

  ngOnInit() {
  }

}
