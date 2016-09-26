import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StarWarsService} from "../heros.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Observable<Object>;
  constructor(private router: ActivatedRoute, private starwarService: StarWarsService) {
    this.hero = router.params.map((p:any) => p.id)
      .switchMap( id => this.starwarService.getPersonDetail(id))
      .startWith({
        name: 'Loading...',
        image: ''
      })
  }

  ngOnInit() {
  }

}
