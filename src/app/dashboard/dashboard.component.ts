import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardService } from '../dashboard/dashboard.service';
import { AddActivity } from '../dashboard/AddActivity';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  addActivityForm: FormGroup;
  workoutTypes = ['Legs', 'Chest', 'Biceps', 'Triceps', 'Back', 'Abs', 'Shoulders', 'Cardio'];
  foodTypes = ['Healthy', 'Unhealthy'];
  addActivityData: AddActivity;
  constructor(private dashboadService: DashboardService) { }

  ngOnInit() {
    this.addActivityForm = new FormGroup({
      workoutDate: new FormControl(),
      workoutDuration: new FormControl(),
      workoutType: new FormControl(),
      foodType: new FormControl()
    })
  }

  addActivity(): void{
    console.log(this.addActivityForm.value)
    //  this.addActivityData = new AddActivity({
    //    this.addActivityForm.get('workoutDate').value,
    //    this.addActivityForm.get('workoutType').value,
    //    this.addActivityForm.get('workoutDate').value,
    //    this.addActivityForm.get('workoutDate').value,
    //  });

    this.dashboadService.addActivityToMongo(this.addActivityForm.value)
    .subscribe((data: {}) => {
      console.log(data);
    });
    
  }

}
