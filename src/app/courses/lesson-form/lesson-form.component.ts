import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {valideUrl} from "../../shared/validateUrl";
import {Lesson} from "../lessons/lessons";

@Component({
  selector: 'app-lesson-form',
  templateUrl: 'lesson-form.component.html',
  styleUrls: ['lesson-form.component.css']
})
export class LessonFormComponent implements OnInit, OnChanges {


  form: FormGroup;
  @Input() initialData: Lesson;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      description: ['', Validators.required],
      url: ['', Validators.required],
      videoUrl: ['', [Validators.required, valideUrl]],
      tags: ['', Validators.required],
      longDescription: ['', Validators.required],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['initialData']){
      if(this.form && changes.initialData.currentValue){
        this.form.patchValue(changes.initialData.currentValue)
      }
    }
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
