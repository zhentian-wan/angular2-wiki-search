import { Component, OnInit } from '@angular/core';
import {StarWarsService} from "./heros.service";
import {Observable} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros: Observable<any>;
  constructor(private starwasService: StarWarsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.heros = this.starwasService.getPeople();
  }

  getHeroByIndex(i){
   // this.router.navigateByUrl(`/heros/${i}`);
   // this.router.navigate(['heros', i]);
    this.router.navigate([i], {relativeTo: this.route})
  }

}
