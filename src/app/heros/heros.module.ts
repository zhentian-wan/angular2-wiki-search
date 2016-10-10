import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosComponent } from './heros.component';
import herosRoutes from './heros.routes';
import {HeroComponent} from "./hero/hero.component";
import {StarWarsService} from "./heros.service";
import {CanHeroDeactivate} from "./heros-can-deactivate.directive";
import {CanHeroActivateDirective} from "./heros-can-activate.directive";
import {HeroDetailResolver} from "./hero-resolver.directive";

@NgModule({
  imports: [
    CommonModule,
    herosRoutes
  ],
  declarations: [HerosComponent, HeroComponent],
  providers: [StarWarsService, CanHeroDeactivate, CanHeroActivateDirective, HeroDetailResolver]
})
export default class HerosModule { }
