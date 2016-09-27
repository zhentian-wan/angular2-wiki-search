import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message = "Hello";

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formValue){
    console.log("formValue", JSON.stringify(formValue, null, 2))
  }
}
