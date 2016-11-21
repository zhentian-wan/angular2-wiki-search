import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SharedServiceModule} from "./shared/index";
import {API_URL, STARWARS_BASE_URL} from "./shared/constance.service";

import appRoutes from './app.routes';
import {APP_BASE_HREF} from "@angular/common";
import {NotFoundComponent} from './shared-components/not-found/not-found.component';
import {firebaseConfig} from "../environments/firebase.config";
import {AngularFireModule, AuthMethods} from "angularfire2";
import {PreloadSelectedModuledsList} from "./shared/preload-router-list";
import {MaterialModule} from "@angular/material";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {SignupComponent} from "./signup/signup.component";


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    SignupComponent
  ],
  imports: [
    appRoutes,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    SharedServiceModule.forRoot(),
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {
      provide: API_URL,
      useValue: `https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK`
    },
    {
      provide: STARWARS_BASE_URL,
      useValue: `https://starwars-json-server-ewtdxbyfdz.now.sh`
    },
    PreloadSelectedModuledsList
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
