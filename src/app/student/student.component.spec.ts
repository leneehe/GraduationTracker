import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { StudentComponent } from './student.component';
import { Student } from '../Student';
import { Diploma } from '../Diploma';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    component.student = new Student(8, [
      {Id: 1, Name: "Math", Mark: 88 },
      {Id: 2, Name: "Science", Mark: 88 },
      {Id: 3, Name: "Literature", Mark: 88 },
      {Id: 4, Name: "Physical Education", Mark: 88 }
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display student Id as 8', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const headingDe = bannerDe.query(By.css('h3'));
    const h3: HTMLElement = headingDe.nativeElement;
    expect(h3.textContent).toContain('8');
  })

  it('should display last course name and mark as Physical Education - Mark: 88', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const listDe = bannerDe.query(By.css('li:last-child'));
    const li: HTMLElement = listDe.nativeElement;
    expect(li.textContent).toEqual('Physical Education - Mark: 88');
  })

  it('should showHasGraduated as [true, 2]', () => {
    component.diploma = {
      Id: 1,
      Credits: 4,
      Requirements: [ 100, 102, 103, 104 ]
    };
    expect(component.showHasGraduated).toEqual([true, 2])
  })

});
