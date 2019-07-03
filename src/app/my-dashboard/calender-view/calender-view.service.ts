import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: "root"
})
export class CalenderViewService{

    constructor(private http: HttpClient){
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
    }

    calenderViewDataUrl = 'http://localhost:3000/workoutdetails/calenderViewDetails';

    private extractData(res: Response){
        let body = res;
        return body || {};
      }


    calenderViewData(): Observable<any>{
        let stats = this.http.get(this.calenderViewDataUrl).pipe(map(this.extractData));
        console.log(stats);
        return stats;
    }

}