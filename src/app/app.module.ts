import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { ResultListComponent } from './home/result-list/result-list.component';
import {SharedServiceModule} from "./home/shared/index";
import {CommonModule} from "@angular/common";
import {API_URL} from "./home/shared/constance.service";
import { MdButtonModule } from '@angular2-material/button';
import {MdInputModule} from "@angular2-material/input";
import {MdListModule} from "@angular2-material/list";
import {MdToolbarModule} from "@angular2-material/toolbar";
import { HomeComponent } from './home/home.component';

import appRoutes from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ResultListComponent,
    HomeComponent
  ],
  imports: [
    MdButtonModule.forRoot(),
    MdInputModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdListModule.forRoot(),
    appRoutes,
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
