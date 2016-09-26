import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {SharedServiceModule} from "./shared/index";
import {API_URL, STARWARS_PEOPLE_URL} from "./shared/constance.service";

import appRoutes from './app.routes';
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    appRoutes,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    SharedServiceModule.forRoot()
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {
      provide: API_URL,
      useValue: `https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK`
    },
    {
      provide: STARWARS_PEOPLE_URL,
      useValue: `https://starwars-json-server-ewtdxbyfdz.now.sh/people`
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
