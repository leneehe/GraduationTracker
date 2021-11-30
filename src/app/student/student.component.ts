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

  get showHasGraduated(): [boolean, STANDING] | undefined {
    if (this.diploma && this.student)
      return this.hasGraduated(this.diploma, this.student)
    else
      return;
  }

  hasGraduated(diploma: Diploma, student: Student): [boolean, STANDING] {
      var credits = 0;

      diploma.Requirements.map(requirementId => this.repository.GetRequirement(requirementId)).forEach(
        requirement => {

          if (requirement) {

            requirement.Courses.map(id => student.Courses.find(course => course.Id === id)).forEach(
              courseTaken => {

                if (courseTaken) {
                  // marks.push(courseTaken.Mark) //add to calculate average of requirement courses only
                  credits += courseTaken.Mark >= requirement.MinimumMark ? (requirement.Credits/requirement.Courses.length) : 0;
                }

              }
            )

          }
        }
      );

      var isGraduated = credits >= diploma.Credits;

      const calcAverage = (arr:number[]):number => { return arr.reduce( ( a, b ) => a + b, 0 ) / arr.length};
      var marks = student.Courses.map(course => course.Mark);
      var average = calcAverage(marks);

      var standing = STANDING.None;
      standing = average < 50 ? STANDING.Remedial : (average < 80 ? STANDING.Average : (average < 95 ? STANDING.MagnaCumLaude : STANDING.SumaCumLaude));

      return [isGraduated, standing];
  }

}
