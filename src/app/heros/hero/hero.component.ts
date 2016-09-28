import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterStateSnapshot} from "@angular/router";
import {StarWarsService} from "../heros.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Observable<any>;

  constructor(private router: ActivatedRoute,
              private starwarService: StarWarsService) {

  }

  ngOnInit() {
    /* this.hero = this.router.params
     .map((p:any) => p.id)
     .switchMap( id => this.starwarService.getPersonDetail(id));
     */

    const heroId = this.router.snapshot.params['id'];
    this.hero = this.starwarService.getPersonDetail(heroId);
  }

}
