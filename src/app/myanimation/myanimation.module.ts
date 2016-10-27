import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyanimationComponent } from './myanimation.component';
import MyanimationRouters from './myanimation.routers';

@NgModule({
  imports: [
    CommonModule,
    MyanimationRouters
  ],
  declarations: [MyanimationComponent]
})
export default class MyanimationModule { }
