import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartDataComponent } from './line-chart-data.component';

describe('LineChartDataComponent', () => {
  let component: LineChartDataComponent;
  let fixture: ComponentFixture<LineChartDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
