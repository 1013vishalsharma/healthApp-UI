import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { WeekDataService } from './week-data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-week-data',
  templateUrl: './week-data.component.html',
  styleUrls: ['./week-data.component.css']
})
export class WeekDataComponent implements OnInit {
  @ViewChild('lineChart') private chartRef;
  chart: [];
  canvas: any;
  ctx: any;
  constructor(private _weekData: WeekDataService) { }

// ngOnInit(){

// }

  ngOnInit() {
    // this._weekData.dailyForcast()
    //     .subscribe(res => {
    //       console.log(res);
    //     })

        let dataSet = [10, 20, 30, 40];

        //this.canvas = document.getElementById("canvass");
        //this.ctx = this.canvas.getContext('2d');
        //this.chart = new Chart(this.ctx, {
        this.chart = new Chart(this.chartRef.nativeElement, {
          type: 'bar',
          data: dataSet
        })
  }

}
