import {Injectable} from '@angular/core';
import {initializeApp, database} from 'firebase';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";

@Injectable()
export class RealtimeService {
  courses$: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.courses$ = this.af.database.list('courses');
    this.courses$.subscribe(console.log)
    const course$: FirebaseObjectObservable<any> = af.database.object('courses/-KT0LsbuhHZGr5F4v7OV');
    course$.subscribe((c)=> {
      console.log("c", JSON.stringify(c, null, 2))
    });
  }

}
