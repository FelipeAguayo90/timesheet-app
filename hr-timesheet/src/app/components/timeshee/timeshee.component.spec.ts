import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheeComponent } from './timeshee.component';

describe('TimesheeComponent', () => {
  let component: TimesheeComponent;
  let fixture: ComponentFixture<TimesheeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimesheeComponent]
    });
    fixture = TestBed.createComponent(TimesheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
