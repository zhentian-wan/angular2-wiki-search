import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import photoRoutes from './photos.routes';
import {MaterialModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    photoRoutes,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PhotosComponent]
})
export default class PhotosModule { }
