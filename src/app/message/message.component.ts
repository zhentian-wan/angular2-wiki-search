import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

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


  constructor(fb: FormBuilder) {
    this.reactiveForm = fb.group({
      // title <-- formControlName="title"
      title: [
        'Title', // <-- Default value
        [
          Validators.required,
          Validators.minLength(3)
        ] // <-- Validations
      ],
      description: [
        'Description',
        [Validators.required]
      ]
    })
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
