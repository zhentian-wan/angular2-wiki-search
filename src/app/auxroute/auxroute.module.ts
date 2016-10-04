import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuxrouteComponent } from './auxroute.component';
import auxRoutes from './auxroute.routes';

@NgModule({
  imports: [
    CommonModule,
    auxRoutes
  ],
  declarations: [AuxrouteComponent]
})
export default class AuxrouteModule { }
