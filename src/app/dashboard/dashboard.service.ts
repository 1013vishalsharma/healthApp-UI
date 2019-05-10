import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DashboardService{

    private addActivityUrl = 'http://localhost:3000/workout';

    constructor(private http: HttpClient){
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
    }

    private extractData(res: Response){
        let body = res;
        return body || {};
      }

    addActivityToMongo(addActivityForm: any){
        console.log('reached in dashb service ' + addActivityForm);
        const aa = this.http.post(this.addActivityUrl, addActivityForm).pipe(map(this.extractData));
        return aa;
    }
}