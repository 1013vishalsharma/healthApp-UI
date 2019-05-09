import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  addActivityForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.addActivityForm = new FormGroup({
      workoutDate: new FormControl(),
      workoutTime: new FormControl(),
      workoutType: new FormControl(),
      foodType: new FormControl()
    })
  }

  addActivity(): void{
    console.log(this.addActivityForm.value);
  }

}
