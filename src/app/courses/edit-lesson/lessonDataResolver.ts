
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {CourseService} from "../course.service";
import {Injectable} from "@angular/core";

@Injectable()
export class LessonDataResolver implements Resolve {
  constructor(private lessonService: CourseService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const url = route.params['id'];
    return this.lessonService.findLessonByUrl(url).first();
  }

}
