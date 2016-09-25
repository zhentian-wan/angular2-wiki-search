import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosComponent } from './heros.component';
import herosRoutes from './heros.routes';
import {HeroComponent} from "./hero/hero.component";

@NgModule({
  imports: [
    CommonModule,
    herosRoutes
  ],
  declarations: [HerosComponent, HeroComponent]
})
export default class HerosModule { }
