import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {SharedServiceModule} from "./home/shared/index";
import {API_URL} from "./home/shared/constance.service";

import appRoutes from './app.routes';

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
    {
      provide: API_URL,
      useValue: `https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK`
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
