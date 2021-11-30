import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationTrackerComponent } from './graduation-tracker.component';

describe('GraduationTrackerComponent', () => {
  let component: GraduationTrackerComponent;
  let fixture: ComponentFixture<GraduationTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduationTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduationTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
