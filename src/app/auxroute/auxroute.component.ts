import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-auxroute',
  templateUrl: './auxroute.component.html',
  styleUrls: ['./auxroute.component.css']
})
export class AuxrouteComponent implements OnInit {
  search: string;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((param)=>{
      this.search = param['search'];
    })
  }

  ngOnInit() {
  }

}
