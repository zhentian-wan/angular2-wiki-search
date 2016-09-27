import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import messageRoutes from './message.routes';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    messageRoutes
  ],
  declarations: [MessageComponent]
})
export default class MessageModule { }
