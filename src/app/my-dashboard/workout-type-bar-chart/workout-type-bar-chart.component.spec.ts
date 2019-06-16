import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTypeBarChartComponent } from './workout-type-bar-chart.component';

describe('WorkoutTypeBarChartComponent', () => {
  let component: WorkoutTypeBarChartComponent;
  let fixture: ComponentFixture<WorkoutTypeBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutTypeBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTypeBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
