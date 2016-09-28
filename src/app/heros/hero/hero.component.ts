import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, RouterStateSnapshot, Router} from "@angular/router";
import {StarWarsService} from "../heros.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {

  hero: Observable<any>;
  description: string;
  querySub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private starwarService: StarWarsService) {

  }

  ngOnInit() {
    /* this.hero = this.router.params
     .map((p:any) => p.id)
     .switchMap( id => this.starwarService.getPersonDetail(id));
     */

    // since herocomponent get init everytime, it would be better to use snapshot for proferemence
    const heroId = this.route.snapshot.params['id'];
    this.hero = this.starwarService.getPersonDetail(heroId);

    this.querySub = this.route.queryParams.subscribe(
      param => this.description = param['description']
    );

    console.log("observers", this.route.queryParams['observers'].length)
  }

  ngOnDestroy(){
    this.querySub.unsubscribe()
  }

}
