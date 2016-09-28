import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosComponent } from './heros.component';
import herosRoutes from './heros.routes';
import {HeroComponent} from "./hero/hero.component";
import {StarWarsService} from "./heros.service";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    herosRoutes
  ],
  declarations: [HerosComponent, HeroComponent],
  providers: [StarWarsService]
})
export default class HerosModule { }
