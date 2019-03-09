import { Component, OnInit, Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { WorkoutDetails } from '../workout-details/workout-details';


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
  private workoutDetails: WorkoutDetails = {};
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
      //console.log(this.workoutDetails.hrselft)
    });
  }
}
