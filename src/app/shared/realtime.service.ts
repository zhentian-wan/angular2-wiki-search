import { Injectable } from '@angular/core';
import {initializeApp , database} from 'firebase';
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Injectable()
export class RealtimeService {

  courses$: FirebaseListObservable<any>;
  constructor(private af: AngularFire) {
    this.courses$ = this.af.database.list('courses');
    this.courses$.subscribe(console.log)
  }

}
