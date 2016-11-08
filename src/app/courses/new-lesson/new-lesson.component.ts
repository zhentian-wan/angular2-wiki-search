import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-new-lesson',
  templateUrl: './new-lesson.component.html',
  styleUrls: ['./new-lesson.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class NewLessonComponent implements OnInit {

  courseId: string;
  constructor(private route: ActivatedRoute) {
    this.courseId = route.snapshot.queryParams['courseId'];
  }

  ngOnInit() {
  }

}
