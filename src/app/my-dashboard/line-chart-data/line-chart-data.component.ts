import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart-data',
  templateUrl: './line-chart-data.component.html',
  styleUrls: ['./line-chart-data.component.css']
})
export class LineChartDataComponent implements OnInit {
  @ViewChild('lineChart')
  private chartContainer: ElementRef
  constructor() { }

  ngOnInit() {
    this.createLineChart();
  }

  createLineChart(){
    let element = this.chartContainer.nativeElement();
    let width = 500;
    let height = 500;

    let canvas = d3.select(element)
                    .append('svg')
                    .attr('viewBox', '[0,0,width, height]');
            
                  canvas.append('g')
                        .call(this.xAxis)
                  
                  canvas.append('g')
                        .call(this.yAxis)
  }

  xAxis(g){

  }

  yAxis(){

  }

}
