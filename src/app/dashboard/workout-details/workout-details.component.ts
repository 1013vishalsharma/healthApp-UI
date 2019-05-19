import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WorkoutDetailsService } from '../workout-details/workout-details.service';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.css']
})
export class WorkoutDetailsComponent implements OnInit {
  addActivityForm: FormGroup;
  workoutTypes = ['Legs', 'Chest', 'Biceps', 'Triceps', 'Back', 'Abs', 'Shoulders', 'Cardio'];
  foodTypes = ['Healthy', 'Unhealthy'];
  
  constructor(private workoutDetailsService: WorkoutDetailsService) {}

  ngOnInit() {
    this.addActivityForm = new FormGroup({
      workoutDate: new FormControl(),
      workoutDuration: new FormControl(),
      workoutType: new FormControl(),
      foodType: new FormControl()
    })
  }
  
  addActivity(): void{
    console.log(this.addActivityForm.value);
    this.workoutDetailsService.addActivityToMongo(this.addActivityForm.value)
    .subscribe((data: {}) => {
      console.log(data);
    });
    
  }

}
