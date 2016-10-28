import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import messageRoutes from './message.routes';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DurationValidator} from "./duration-validator";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    messageRoutes
  ],
  declarations: [MessageComponent, DurationValidator]
})
export default class MessageModule { }
