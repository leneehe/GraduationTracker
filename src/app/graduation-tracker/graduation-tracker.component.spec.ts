import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { By } from '@angular/platform-browser';

import { GraduationTrackerComponent } from './graduation-tracker.component';
import { Diploma } from '../Diploma';

describe('GraduationTrackerComponent', () => {
  let component: GraduationTrackerComponent;
  let fixture: ComponentFixture<GraduationTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduationTrackerComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduationTrackerComponent);
    component = fixture.componentInstance;
    component.diploma = {
      Id: 3,
      Credits: 3,
      Requirements: [ 301, 302, 303 ]
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display Id as 3', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const trDe = bannerDe.query(By.css('.diploma tr:first-child'));
    const tr: HTMLElement = trDe.nativeElement;
    expect(tr.textContent).toEqual('Id:3');
  });

  it('should display Credits as 3', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const trDe = bannerDe.query(By.css('.diploma tr:nth-child(2)'));
    const tr: HTMLElement = trDe.nativeElement;
    expect(tr.textContent).toEqual('Credits:3');
  });

  it('should display Requirements as 301,302,303', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const trDe = bannerDe.query(By.css('.diploma tr:last-child'));
    const tr: HTMLElement = trDe.nativeElement;
    expect(tr.textContent).toEqual('Requirements:301,302,303');
  })
});
