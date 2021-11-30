import { Component, OnInit, Input } from '@angular/core';
import { Diploma } from '../Diploma';
import { Student } from '../Student';
import { Repository } from '../repository';
import { STANDING } from '../STANDING';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  private repository: Repository;
  @Input() student?: Student;
  @Input() diploma?: Diploma;

  constructor() {
    this.repository = new Repository();
  }

  ngOnInit(): void {
  }

  get showHasGraduated(): [boolean, number] | undefined {
    if (this.diploma && this.student)
      return this.hasGraduated(this.diploma, this.student)
    else
      return;
  }

  hasGraduated(diploma: Diploma, student: Student): [boolean, number]
  {
      var credits = 0;
      var average = 0;

      for(let i = 0; i < diploma.Requirements.length; i++)
      {
          for(let j = 0; j < student.Courses.length; j++)
          {
              var requirement = this.repository.GetRequirement(diploma.Requirements[i]);

              if (requirement) {
                for (let k = 0; k < requirement.Courses.length; k++)
                {
                    if (requirement.Courses[k] == student.Courses[j].Id)
                    {
                        average += student.Courses[j].Mark;
                        if (student.Courses[j].Mark > requirement.MinimumMark)
                        {
                            credits += requirement.Credits;
                        }
                    }
                }
              }

          }
      }

      average = average / student.Courses.length;

      var standing = STANDING.None;

      if (average < 50)
          standing = STANDING.Remedial;
      else if (average < 80)
          standing = STANDING.Average;
      else if (average < 95)
          standing = STANDING.MagnaCumLaude;
      else
          standing = STANDING.SumaCumLaude;

      switch (standing)
      {
          case STANDING.Remedial:
              return [false, standing];
          case STANDING.Average:
              return [true, standing];
          case STANDING.SumaCumLaude:
              return [true, standing];
          case STANDING.MagnaCumLaude:
              return [true, standing];

          default:
              return [false, standing];
      }
  }

}
