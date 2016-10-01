import { Injectable } from '@angular/core';
import {initializeApp , database} from 'firebase';

@Injectable()
export class RealtimeService {

  constructor() {

    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyDiS_LY_Sz9Go1KxvDCaF4vAIuhvjeQf2k",
      authDomain: "angular2-firebase-961ae.firebaseapp.com",
      databaseURL: "https://angular2-firebase-961ae.firebaseio.com",
      storageBucket: "angular2-firebase-961ae.appspot.com",
      messagingSenderId: "576526414161"
    };
    initializeApp(config);

    var root = database().ref();

    root.on('value', function(snapshot){
      console.log(snapshot.val())
    })
  }

}
