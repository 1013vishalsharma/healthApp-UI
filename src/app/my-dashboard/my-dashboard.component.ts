import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MyDashboardService } from './my-dashboard.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */

  content: any;
  getCardData(){
    this.content = this.myDashboardService.getCardData()
                        .subscribe((data:{}) => {
                        this.content = data;
                        })
  };

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, content: 'here i am' },
          { title: 'Card 2', cols: 1, rows: 1, content: 'here i am' },
          { title: 'Card 3', cols: 1, rows: 1, content: 'here i am' },
          { title: 'Card 4', cols: 1, rows: 1, content: 'here i am' }
        ];
      }


      /*
      workoutDate: Date;
    workoutType: any;
    moneyCollected: any;
    foodType: any;
      */

      return [
        { title: 'Last Workout Date', cols: 1, rows: 1, content: this.content.workoutDate },
        { title: 'Last Workout Type', cols: 1, rows: 1, content: this.content.workoutType },
        { title: 'Money Collected', cols: 1, rows: 1, content: this.content.moneyCollected },
        { title: 'Pending Hours Left', cols: 1, rows: 1, content: this.content.foodType },
        // { title: 'Date', cols: 1, rows: 1 },
        // { title: 'Type', cols: 1, rows: 1 },
        // { title: 'Amount', cols: 1, rows: 1 }, 
        // { title: 'Time', cols: 1, rows: 1 },
        // { title: 'chart', cols: 2, rows: 2 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private myDashboardService: MyDashboardService, private route: ActivatedRoute) {
    
  }

  ngOnInit(){
    //this.getCardData();
    this.content = this.route.snapshot.data.content;
  }
}
