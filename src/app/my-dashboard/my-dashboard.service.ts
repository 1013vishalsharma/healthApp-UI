import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: "root",
})
export class MyDashboardService{
    private cardDataUrl = 'http://localhost:3000/workoutdetails/latestWorkoutDetails';

    constructor(private http: HttpClient){
        const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    }

    private extractData(res: Response){
        let body = res;
        return body || {};
      }

    getCardData():Observable<any>{
        return  this.http.get(this.cardDataUrl).pipe(map(this.extractData));
        // console.log('reched here : '+aa);
        // return aa;
    }
}