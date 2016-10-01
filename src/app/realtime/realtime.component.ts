import { Component, OnInit } from '@angular/core';
import {RealtimeService} from "../shared/realtime.service";

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.css']
})
export class RealtimeComponent implements OnInit {

  constructor(private rl: RealtimeService){

  }

  ngOnInit() {


  }

}
