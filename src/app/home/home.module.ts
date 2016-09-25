
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {ResultListComponent} from "./result-list/result-list.component";
import {MdListModule} from "@angular2-material/list";
import {MdToolbarModule} from "@angular2-material/toolbar";
import {MdInputModule} from "@angular2-material/input";
import {MdButtonModule} from "@angular2-material/button";
import homeRoutes from './home.routes';
@NgModule({
  imports: [
    CommonModule,
    MdButtonModule.forRoot(),
    MdInputModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdListModule.forRoot(),
    homeRoutes
  ],
  declarations: [HomeComponent, SearchBarComponent, ResultListComponent],
  exports: [HomeComponent, SearchBarComponent, ResultListComponent]
})

export default class HomeModule{}
