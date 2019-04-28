import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Register } from './register';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RegisterService{
    private registerUrl = 'http://localhost:3000/user/register';

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

    signUp(registerData: Register): Observable<any>{
        console.log('reached register service: '+registerData);
        const aa = this.http.post(this.registerUrl, registerData).pipe(map(this.extractData));
        return aa;
    }

}