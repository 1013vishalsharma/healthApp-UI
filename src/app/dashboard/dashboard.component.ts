import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardService } from '../dashboard/dashboard.service';
import { WorkoutDetailsComponent } from '../dashboard/workout-details/workout-details.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  addActivityForm: FormGroup;
  workoutTypes = ['Legs', 'Chest', 'Biceps', 'Triceps', 'Back', 'Abs', 'Shoulders', 'Cardio'];
  foodTypes = ['Healthy', 'Unhealthy'];


  constructor(private dashboadService: DashboardService, private viewContainerRef: ViewContainerRef) { }

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
    this.dashboadService.addActivityToMongo(this.addActivityForm.value)
    .subscribe((data: {}) => {
      console.log(data);
    });
    
  }
}
