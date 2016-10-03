import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";

@Injectable()
export class RealtimeService {

  constructor(private af: AngularFire) {
    const courses$: FirebaseListObservable<any> = af.database.list('courses');
    courses$.subscribe( (cs) => (
      console.log("cs", JSON.stringify(cs, null, 2))
    ));
    const course$: FirebaseObjectObservable<any> = af.database.object('courses/-KT0LsbuhHZGr5F4v7OV');
    course$.subscribe((c)=> {
      console.log("c", JSON.stringify(c, null, 2))
    });
  }

}
