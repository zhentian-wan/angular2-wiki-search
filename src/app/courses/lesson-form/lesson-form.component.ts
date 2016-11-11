import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {valideUrl} from "../../shared/validateUrl";

@Component({
  selector: 'app-lesson-form',
  templateUrl: 'lesson-form.component.html',
  styleUrls: ['lesson-form.component.css']
})
export class LessonFormComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      title: ['', Validators.required],
      lessonUrl: ['', Validators.required],
      videoUrl: ['', [Validators.required, valideUrl]],
      tags: ['', Validators.required],
      longDescription: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  reset(){
    this.form.reset();
  }

  get value(){
    return this.form.value;
  }

}
