import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ContactComponent} from "./contact.component";
import contactRoutes from './contact.routes';
@NgModule({
  imports: [CommonModule, contactRoutes],
  declarations: [ContactComponent]
})
export default class ContactModule{}
