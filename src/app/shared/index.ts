
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {WikiSearchService} from "./wiki-search.service";
import {RealtimeService} from "./realtime.service";
import {AuthService} from "./auth/AuthService";
@NgModule({})
export class SharedServiceModule{
  static forRoot(){
    return {
      ngModule: SharedServiceModule,
      providers: [
        WikiSearchService,
        RealtimeService,
        AuthService
      ]
    }
  }
}

export {
  WikiSearchService,
  RealtimeService,
  AuthService
}
