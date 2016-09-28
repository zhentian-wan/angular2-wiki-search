import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import playgroundRouters from './playground.routes';

@NgModule({
  imports: [
    CommonModule,
    playgroundRouters
  ],
  declarations: [PlaygroundComponent]
})
export default class PlaygroundModule { }
