import { Component, OnInit, Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { WorkoutDetails } from '../workout-details/workout-details';
import { IWorkoutDetails } from '../workout-details/Iworkout-details';


@Component({
  selector: 'app-fitness-track',
  templateUrl: './fitness-track.component.html',
  styleUrls: ['./fitness-track.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class FitnessTrackComponent implements OnInit {

  private fitnessTrackUrl = 'http://localhost:3000/workout';
  private workoutDetails: IWorkoutDetails = {};
  private hrs;
  constructor(private http: HttpClient) { 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
  }

  ngOnInit() {
    this.getFitnessTrackData()
  }

  private extractData(res: Response){
    let body = res;
    return body || {};
  }

  getFitnessTrackData(){
    const trackData = this.http.get(this.fitnessTrackUrl)
    .pipe(map(this.extractData))
    .subscribe((data: {}) => {
      console.log(data);
      this.workoutDetails = data;
      console.log('workoutdetails: '+this.workoutDetails);
      this.lastWorkoutDay(this.workoutDetails.workoutTime);
    });
  }

  private lastWorkoutDay(date: any){
    var sampleDate: Date = new Date(date);
    console.log(sampleDate);
    var lastWorkoutDate = sampleDate.toString().substring(0, 10);
    this.workoutDetails.workoutTime = lastWorkoutDate;
  }

  toggleShowHide(){
    
  }
}
