import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import SignupRoutes from './signup.routes';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutes
  ],
  declarations: [SignupComponent]
})
export default class SignupModule { }
