import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { MyDashboardService } from './my-dashboard.service';

@Injectable({
    providedIn: "root"
})
export class MyDashboardResolver implements Resolve<Observable<string>>{

    constructor(private mydashboardService: MyDashboardService){}

    resolve(){
        return this.mydashboardService.getCardData();
    }
}