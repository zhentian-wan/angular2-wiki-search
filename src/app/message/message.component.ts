import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, Validators, FormGroup, FormControl, Validator, AbstractControl} from "@angular/forms";
import {validateDuration} from "./validateDuration";
import {confirmPasswords} from "./confirmPasswords";

class Video {
  constructor(
    private title: string,
    private duration: number,
    private description: string
  ){

  }
}

function passwordValidator(c: AbstractControl){
  return c.get('pwd').value === c.get('rpwd').value ?
    null :
    {
      nomatch: true
    }
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @ViewChild('myForm3') form;

  message = "Hello";
  answer: string;
  locations: Array<string>;
  reactiveForm: FormGroup;
  signupForm: FormGroup;
  video: Video;
  extra: FormControl;
  signup = {};

  constructor(fb: FormBuilder) {

    this.extra = new FormControl('...', [
      Validators.maxLength(100)
    ]);

    this.signupForm = fb.group({
      password: [
        '',
        Validators.required
      ],
      confirm: [
        '',
        [
          Validators.required,
          confirmPasswords.bind(undefined, this.signup)
        ]
      ],
      newsletter: true
    });


    this.reactiveForm = fb.group({
      // title <-- formControlName="title"
      title: [
        '', // <-- Default value
        [
          Validators.required,
          Validators.minLength(3)
        ] // <-- Validations
      ],
      duration: [
        0,
        [
          Validators.required,
          //Validators.pattern('[0-9]+'),
          validateDuration
        ]
      ],
      extra: this.extra,
      description: [
        'Description',
        [Validators.required]
      ],
      pwds: fb.group({
        pwd: '',
        rpwd: ''
      }, {validator: passwordValidator})
    });

    this.reactiveForm.valueChanges
      .filter( x => this.reactiveForm.valid)
      .map(value => new Video(value.title, value.duration, value.description))
      //.do(formValue => console.log(formValue))
      .subscribe((video) => {
        this.video = video;
      })
  }

  partialUpdate(){
    this.reactiveForm.patchValue({
      title: 'updatedTitle'
    })
  }

  fullUpdate(){
    this.reactiveForm.setValue({
      title: "Full updated title",
      description: "Full updated description",
      duration: 0,
      extra: "Extra"
    })
  }

  reset(){
    this.reactiveForm.reset();
  }

  ngOnInit() {
    this.locations = [
      'China',
      'Finland',
      'Norway',
      'Japan'
    ];
  }

  onSubmit(formValue) {
    console.log("formValue", JSON.stringify(formValue, null, 2))
  }

  ngAfterViewInit() {
    this.form.valueChanges
      .subscribe((res) => console.table(res));

    this.form.statusChanges
      .subscribe((res) => console.log(res));

    Observable
      .combineLatest(
        this.form.valueChanges,
        this.form.statusChanges,
        (value, status) => ({value, status})
      )
      .filter( ({status}) => {
        return status === "VALID";
      })
      .subscribe( val => {
        this.answer = "You are right!";
      })

  }

  legendStyle(obj){
    return {
      color: obj.dirty && obj.invalid ? 'red': 'black'
    }
  }
}
