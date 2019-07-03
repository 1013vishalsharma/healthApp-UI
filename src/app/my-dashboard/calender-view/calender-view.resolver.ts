import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CalenderViewService } from './calender-view.service';

@Injectable({
    providedIn: "root"
})
export class CalenderViewResolver implements Resolve<Observable<string>>{

    constructor(private calenderViewService: CalenderViewService){}

    resolve(){
        return this.calenderViewService.calenderViewData();
    }
}