import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';

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

  constructor() {
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
}
