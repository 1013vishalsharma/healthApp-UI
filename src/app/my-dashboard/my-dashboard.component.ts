import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Last Workout Date', cols: 1, rows: 1 },
        { title: 'Last Workout Type', cols: 1, rows: 1 },
        { title: 'Money Collected', cols: 1, rows: 1 },
        { title: 'Pending Hours Left', cols: 1, rows: 1 },
        // { title: 'Date', cols: 1, rows: 1 },
        // { title: 'Type', cols: 1, rows: 1 },
        // { title: 'Amount', cols: 1, rows: 1 },
        // { title: 'Time', cols: 1, rows: 1 },
        // { title: 'chart', cols: 2, rows: 2 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
