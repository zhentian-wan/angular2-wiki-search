
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {WikiSearchService} from "./wiki-search.service";
import {RealtimeService} from "./realtime.service";
@NgModule({})
export class SharedServiceModule{
  static forRoot(){
    return {
      ngModule: SharedServiceModule,
      providers: [WikiSearchService, RealtimeService]
    }
  }
}

export {
  WikiSearchService,
  RealtimeService
}
