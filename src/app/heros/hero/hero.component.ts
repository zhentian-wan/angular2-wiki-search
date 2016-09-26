import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css']
})
export class HeroComponent implements OnInit {

  id;
  constructor(private router: ActivatedRoute) {
    this.id = router.params.map((p:any) => p.id);
  }

  ngOnInit() {
  }

}
