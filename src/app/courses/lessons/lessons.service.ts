import { Injectable } from '@angular/core';
import {RealtimeService} from "../../shared/realtime.service";
import {Observable} from "rxjs";
import {Lesson} from "./lessons";

@Injectable()
export class LessonsService {

  lessons$: Observable<Lesson[]>;
  constructor(private rt: RealtimeService) {
    this.lessons$ = rt.getLessonObs();
  }

  getAllLessons(){
    return this.lessons$;
  }
}
