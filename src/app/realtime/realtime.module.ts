import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RealtimeComponent} from './realtime.component';
import realtimeRoutes from './realtime.routes';

@NgModule({
  imports: [
    CommonModule,
    realtimeRoutes
  ],
  declarations: [RealtimeComponent]
})
export default class RealtimeModule {
}
