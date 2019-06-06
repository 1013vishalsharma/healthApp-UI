import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressDonutChartComponent } from './progress-donut-chart.component';

describe('ProgressDonutChartComponent', () => {
  let component: ProgressDonutChartComponent;
  let fixture: ComponentFixture<ProgressDonutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressDonutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
