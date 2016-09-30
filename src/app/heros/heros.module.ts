import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosComponent } from './heros.component';
import herosRoutes from './heros.routes';
import {HeroComponent} from "./hero/hero.component";
import {StarWarsService} from "./heros.service";
import {RouterModule} from "@angular/router";
import {CanHeroDeactivate} from "./heros-can-deactivate.directive";
import {CanHeroActivateDirective} from "./heros-can-activate.directive";

@NgModule({
  imports: [
    CommonModule,
    herosRoutes
  ],
  declarations: [HerosComponent, HeroComponent],
  providers: [StarWarsService, CanHeroDeactivate, CanHeroActivateDirective]
})
export default class HerosModule { }
