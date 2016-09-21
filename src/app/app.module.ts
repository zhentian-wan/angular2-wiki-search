import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultListComponent } from './result-list/result-list.component';
import {SharedServiceModule} from "./shared/index";
import {CommonModule} from "@angular/common";
import {API_URL} from "./shared/constance.service";
import { MdButtonModule } from '@angular2-material/button';
import {MdInputModule} from "@angular2-material/input";
import {MdListModule} from "@angular2-material/list";
import {MdToolbarModule} from "@angular2-material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ResultListComponent
  ],
  imports: [
    MdButtonModule.forRoot(),
    MdInputModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdListModule.forRoot(),
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    JsonpModule,
    SharedServiceModule.forRoot()
  ],
  providers: [
    {
      provide: API_URL,
      useValue: `https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK`
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
