/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditLessonComponent } from './edit-lesson.component';

describe('EditLessonComponent', () => {
  let component: EditLessonComponent;
  let fixture: ComponentFixture<EditLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
