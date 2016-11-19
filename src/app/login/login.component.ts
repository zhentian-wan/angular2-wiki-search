import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,
  private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    const formValue = this.form.value;

    this.authService.login(formValue.email, formValue.password)
      .subscribe((res) => {
         this.router.navigate(['/home']);
      })
  }

  signInWithGithub(){
    this.authService.signInWithGithub()
      .then(this.postSignIn.bind(this))
  }

  signInWithTwitter(){
    this.authService.signInWithTwitter()
      .then(this.postSignIn.bind(this))
  }

  signInWithGoogle(){
    this.authService.signInWithGoogle()
      .then(this.postSignIn.bind(this))
  }

  postSignIn() {
    console.log("Auth id: ", this.authService.id);
    this.router.navigate(['/home']);
  }
}
