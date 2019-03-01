import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { ILogin } from './login'

@Injectable()
export class LoginService{
    loginDetails: ILogin;
    constructor(private _http: Http){
        this.loginDetails = {
            username: 'vs1',
            password: 'password'
        }
     }

    getWorkoutDetails(): Observable<any>{
        this._http.get("https://jsonplaceholder.typicode.com/users")
        return null;
    }
}