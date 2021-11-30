import { Component, OnInit } from '@angular/core';

import { Diploma } from '../Diploma';
import { Repository } from '../repository';
import { Student } from '../Student';

@Component({
  selector: 'app-graduation-tracker',
  templateUrl: './graduation-tracker.component.html',
  styleUrls: ['./graduation-tracker.component.scss']
})
export class GraduationTrackerComponent implements OnInit {

  private repository: Repository;

  diploma: Diploma;
  students: Student[];

  constructor() {
      this.repository = new Repository();

      this.diploma = this.repository.GetDiploma(1) || { Id: 0, Credits: 0, Requirements: [] };
      this.students = this.repository.GetStudents();
   }

  ngOnInit(): void {
  }

}
