import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  signInWithGithub(){
    this.auth.signInWithGithub()
      .then(this.postSignIn.bind(this))
  }

  signInWithTwitter(){
    this.auth.signInWithTwitter()
      .then(this.postSignIn.bind(this))
  }

  signInWithGoogle(){
    this.auth.signInWithGoogle()
      .then(this.postSignIn.bind(this))
  }

  postSignIn() {
    console.log("Auth id: ", this.auth.id);
    this.router.navigate(['/home']);
  }

}
