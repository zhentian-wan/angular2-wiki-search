
import {PreloadingStrategy, Router} from "@angular/router";
import {Observable} from "rxjs";
export class PreloadSelectedModuledsList implements PreloadingStrategy {
  preload(route: Router, load: Function): Observable<any> {
    return route['data'] && route['data']['preload'] ? load() : Observable.of(null);
  }
}
