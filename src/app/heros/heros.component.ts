import { Component, OnInit } from '@angular/core';
import {StarWarsService} from "./heros.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros: Observable<any>;
  constructor(private starwasService: StarWarsService) { }

  ngOnInit() {
    this.heros = this.starwasService.getPeople();
  }

}
