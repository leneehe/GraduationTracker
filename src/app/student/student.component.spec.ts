import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';
import { Diploma } from '../Diploma';
import { STANDING } from '../STANDING';
import { Student } from '../Student';

const diploma: Diploma = {
  Id: 1,
  Credits: 4,
  Requirements: [ 100, 102, 103, 104 ]
};

const students: Student[] = [
  new Student(1, [
    { Id: 1, Name: "Math", Mark: 95 },
    { Id: 2, Name: "Science", Mark: 95 },
    { Id: 3, Name: "Literature", Mark: 95 },
    { Id: 4, Name: "Physical Education", Mark: 95 }
  ]),
  new Student(2, [
    {Id: 1, Name: "Math", Mark: 80 },
    {Id: 2, Name: "Science", Mark: 80 },
    {Id: 3, Name: "Literature", Mark: 80 },
    {Id: 4, Name: "Physichal Education", Mark: 80 }
  ]),
  new Student(3, [
    {Id: 1, Name: "Math", Mark: 50 },
    {Id: 2, Name: "Science", Mark: 50 },
    {Id: 3, Name: "Literature", Mark: 50 },
    {Id: 4, Name: "Physichal Education", Mark: 50 }
  ]),
  new Student(4, [
    {Id: 1, Name: "Math", Mark: 40 },
    {Id: 2, Name: "Science", Mark: 40 },
    {Id: 3, Name: "Literature", Mark: 40 },
    {Id: 4, Name: "Physichal Education", Mark: 40 }
  ])
];

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have credits', () => {
    var graduated: [boolean, STANDING][] = [];

    students.forEach(student => {
      graduated.push(component.hasGraduated(diploma, student));
    });

    expect(graduated[graduated.length -1]).toBeTruthy();
  });
});
