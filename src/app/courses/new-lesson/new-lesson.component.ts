import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../course.service";

@Component({
  selector: 'app-new-lesson',
  templateUrl: './new-lesson.component.html',
  styleUrls: ['./new-lesson.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class NewLessonComponent implements OnInit {

  courseId: string;
  constructor(private route: ActivatedRoute, private courseService: CourseService) {
    this.courseId = route.snapshot.queryParams['courseId'];
  }

  ngOnInit() {
  }

  save(form){
    this.courseService.createNewLesson(this.courseId, form.value)
      .subscribe(() => {
        alert("New Lesson has been created successfully");
        form.reset();
      }, (err) => {
        console.error("save() new lesson", err);
      })
  }

}
