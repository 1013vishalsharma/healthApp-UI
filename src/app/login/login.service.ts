import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Login } from './login';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
  title = 'app works';
  private url = 'http://localhost:3000/challenge';
  private loginUrl = 'http://localhost:3000/user/login';
  data: any = {};
  
  constructor(private http: HttpClient) {
    console.log('hello user');
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

   login(loginData: Login): Observable<any>{
    console.log(loginData);
       return this.http.post(this.loginUrl, loginData).pipe(map(this.extractData));
   }


   getData(): Observable<any>{
     return this.http.get(this.url).pipe(map(this.extractData));
   }

   private handleError<T> (operation = 'operation', result?:T){
     return (error: any): Observable<T> => {
       console.log(error);
       return of(result as T);
     }
   }
}
