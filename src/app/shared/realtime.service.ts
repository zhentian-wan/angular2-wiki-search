import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Injectable()
export class RealtimeService {

  constructor(private af: AngularFire) {
    const courses$: FirebaseListObservable<any> = af.database.list('courses');
    courses$.subscribe(
      val => console.log("val", JSON.stringify(val, null, 2))
    )
  }

}
