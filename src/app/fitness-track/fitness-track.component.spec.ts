import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessTrackComponent } from './fitness-track.component';

describe('FitnessTrackComponent', () => {
  let component: FitnessTrackComponent;
  let fixture: ComponentFixture<FitnessTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
