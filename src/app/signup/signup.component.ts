import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private auth: AuthService, private fb: FormBuilder,
  private router: Router
  ){

  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required],
      pwd2: ['', Validators.required]
    });
  }

  signup(){
    const value = this.signupForm.value;
    this.auth.signUp(value.email, value.pwd)
      .subscribe(() => {
        this.router.navigate(['/home'])
      });
  }

  isPasswordMatch(){
    const value = this.signupForm.value;
    return value.pwd && value.pwd2 && value.pwd === value.pwd2;
  }

}
