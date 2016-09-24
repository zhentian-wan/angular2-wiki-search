
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {WikiSearchService} from "./wiki-search.service";
@NgModule({})
export class SharedServiceModule{
  static forRoot(){
    return {
      ngModule: SharedServiceModule,
      providers: [WikiSearchService]
    }
  }
}

export {
  WikiSearchService
}
