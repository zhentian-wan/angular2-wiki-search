import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'result-list',
  templateUrl: 'result-list.component.html',
  styleUrls: ['result-list.component.css']
})
export class ResultListComponent implements OnInit {

  @Input('keys') searchResult;
  @Input('urls') urls;

  constructor() {

  }

  ngOnInit() {
  }

}
