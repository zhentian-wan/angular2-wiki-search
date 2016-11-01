import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageComponent} from './message.component';
import messageRoutes from './message.routes';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DurationValidator} from "./duration-validator";
import {SwitchControlComponent} from './switch-control/switch-control.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    messageRoutes
  ],
  declarations: [MessageComponent,
    DurationValidator, SwitchControlComponent]
})
export default class MessageModule {
}
