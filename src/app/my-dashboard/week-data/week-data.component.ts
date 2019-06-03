import { Component, ElementRef, ViewChild, ViewEncapsulation, OnChanges, Input, OnInit } from '@angular/core';
import { WeekDataService } from './week-data.service';
import { Chart } from 'chart.js';
//import { d3 } from 'd3';
import * as d3 from "d3";
import * as d3scale from "d3-scale";
import * as d3axis from "d3-axis";
//import { SampleCharts } from './week-data-sample-chart.service';
import { WeekData } from './week-data'

@Component({
  selector: 'app-week-data',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './week-data.component.html',
  styleUrls: ['./week-data.component.css']
})
export class WeekDataComponent implements OnChanges, OnInit {
  @ViewChild('chart')
  private chartContainer: ElementRef;

  @Input()
  data: any[];

  margin = { top: 20, right: 20, bottom: 30, left: 40 };

  // chart: [];
  // canvas: any;
  // ctx: any;
  //constructor(private _weekData: WeekDataService) { }

  constructor(private weekDataService: WeekDataService) {
    //this.data = weekDataService.dailyForcast().subscribe(res => res);
    this.data = [
      {
        "letter": "A",
        "frequency": 0.08167
      },
      {
        "letter": "B",
        "frequency": 0.01492
      },
      {
        "letter": "C",
        "frequency": 0.02782
      },
      {
        "letter": "D",
        "frequency": 0.04253
      },
      {
        "letter": "E",
        "frequency": 0.12702
      },
      {
        "letter": "F",
        "frequency": 0.02288
      },
      {
        "letter": "G",
        "frequency": 0.02015
      },
      {
        "letter": "H",
        "frequency": 0.06094
      },
      {
        "letter": "I",
        "frequency": 0.06966
      },
      {
        "letter": "J",
        "frequency": 0.00153
      },
      {
        "letter": "K",
        "frequency": 0.00772
      },
      {
        "letter": "L",
        "frequency": 0.04025
      },
      {
        "letter": "M",
        "frequency": 0.02406
      },
      {
        "letter": "N",
        "frequency": 0.06749
      },
      {
        "letter": "O",
        "frequency": 0.07507
      },
      {
        "letter": "P",
        "frequency": 0.01929
      },
      {
        "letter": "Q",
        "frequency": 0.00095
      },
      {
        "letter": "R",
        "frequency": 0.05987
      },
      {
        "letter": "S",
        "frequency": 0.06327
      },
      {
        "letter": "T",
        "frequency": 0.09056
      },
      {
        "letter": "U",
        "frequency": 0.02758
      },
      {
        "letter": "V",
        "frequency": 0.00978
      },
      {
        "letter": "W",
        "frequency": 0.0236
      },
      {
        "letter": "X",
        "frequency": 0.0015
      },
      {
        "letter": "Y",
        "frequency": 0.01974
      },
      {
        "letter": "Z",
        "frequency": 0.00074
      }
    ]
  }

  ngOnInit() {
    this.data = [
      {
        "letter": "A",
        "frequency": 0.08167
      },
      {
        "letter": "B",
        "frequency": 0.01492
      },
      {
        "letter": "C",
        "frequency": 0.02782
      },
      {
        "letter": "D",
        "frequency": 0.04253
      },
      {
        "letter": "E",
        "frequency": 0.12702
      },
      {
        "letter": "F",
        "frequency": 0.02288
      },
      {
        "letter": "G",
        "frequency": 0.02015
      },
      {
        "letter": "H",
        "frequency": 0.06094
      },
      {
        "letter": "I",
        "frequency": 0.06966
      },
      {
        "letter": "J",
        "frequency": 0.00153
      },
      {
        "letter": "K",
        "frequency": 0.00772
      },
      {
        "letter": "L",
        "frequency": 0.04025
      },
      {
        "letter": "M",
        "frequency": 0.02406
      },
      {
        "letter": "N",
        "frequency": 0.06749
      },
      {
        "letter": "O",
        "frequency": 0.07507
      },
      {
        "letter": "P",
        "frequency": 0.01929
      },
      {
        "letter": "Q",
        "frequency": 0.00095
      },
      {
        "letter": "R",
        "frequency": 0.05987
      },
      {
        "letter": "S",
        "frequency": 0.06327
      },
      {
        "letter": "T",
        "frequency": 0.09056
      },
      {
        "letter": "U",
        "frequency": 0.02758
      },
      {
        "letter": "V",
        "frequency": 0.00978
      },
      {
        "letter": "W",
        "frequency": 0.0236
      },
      {
        "letter": "X",
        "frequency": 0.0015
      },
      {
        "letter": "Y",
        "frequency": 0.01974
      },
      {
        "letter": "Z",
        "frequency": 0.00074
      }
    ]

    if (!this.data) {
      return;
    }
    this.createCharts();
    this.createSampleCharts();
    this.pathExample();
  }

  ngOnChanges() {
    if (!this.data) {
      return;
    }
    this.createCharts();
  }

  /**
   * way to create a chart in d3js
   */
  createSampleCharts() {
    d3.select('p').text('i reached here');
    var width = 500;
    var height = 500;



    //----------scaling data in d3

    var widthScale = d3.scaleLinear() //to linearly scale the values
      .domain([0,1000])  //min and max of your data
      .range([0, width]); // to what point should you scale
      //basically resizing bars based on the width, if size is longer than the width

    var colorScale = d3.scaleLinear<string, number>() //to scale colors
      .domain([0, 60])  // input value range
      .range(['red', 'blue']); // based on input value out value range
      //<s,n> means it takes string as range and outputs number as value

    //------------end of scaling data in d3




    //------------axis for bar chart in d3

    var axis = d3.axisBottom(widthScale)  //where you want to create axis
                  .ticks(5);              //distance between x axis 0-10-20....

    // canvas.append('g')  //element to group all the contents of svg to apply a collective style
    //         .attr('transform', 'translate(0, 350)') // transform/moves based on x,y axis (0,350)
    //         .call(axis);  // way to call axis function

    //------------end axis for bar charts




    var canvas = d3.select('body')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', "translate(20,0)");



    //----------displaying data in d3 without charts                
    var dataArr = [20, 40, 50, 60];

    // var bars = canvas.selectAll('rect') //elements to display / create
    //                   .data(dataArr)  //where the data is coming from
    //                   .enter()  //creates placeholders for all the elements not present eg: rect 
    //                       .append('rect') //create rect ele
    //                       .attr('width', function(d){ return d*10;})  //assign width based on data
    //                       .attr('height', 50) //assign height based on data
    //                       .attr('y', function(d, i){  //to create a distance between bars, without them
    //                         return i*100;             //they are stacked on top of each other
    //                       });
    //----------end of display data with d3



    // var bars = canvas.selectAll('rect') //elements to display / create
    //   .data(dataArr)  //where the data is coming from
    //   .enter()  //creates placeholders for all the elements not present eg: rect 
    //   .append('rect') //create rect ele
    //   .attr('width', function (d: number) { return widthScale(d); })  //assign width based on data
    //   .attr('height', 50) //assign height based on data
    //   .attr('fill', function (d: number) { return colorScale(d) })
    //   .attr('y', function (d, i) {  //to create a distance between bars, without them
    //     return i * 100;             //they are stacked on top of each other
    //   });


    //   canvas.append('g')  //element to group all the contents of svg to apply a collective style
    //         .attr('transform', 'translate(0, 350)') // transform/moves based on x,y axis (0,350)
    //         .call(axis);  // way to call axis function


    // var bars = canvas.selectAll('rect') //elements to display / create
    //         .data(this.data)  //where the data is coming from
    //         .enter()  //creates placeholders for all the elements not present eg: rect 
    //         .append('rect') //create rect ele
    //         .attr('width', function (d: WeekData) { return d.frequency * 1000; })  //assign width based on data
    //         .attr('height', 45) //assign height based on data
    //         //.attr('fill', function (d: number) { return colorScale(d) })
    //         .attr('y', function (d: WeekData, i) {  //to create a distance between bars, without them
    //           return i * 100;             //they are stacked on top of each other
    //         });

  }


  pathExample(){
    var canvas = d3.select('body')
                    .append('svg')
                    .attr('width', 500)
                    .attr('height', 500);

    var data = [
                  { x:10, y:20 },
                  { x:40, y:60 },
                  { x:50, y:70 }
                ]

    var group = canvas.append('g')
                      .attr('transform', 'translate(100,100)');
    
    var line = d3.line()
                .x(function (d){ return d.x; })
                .y(function (d){ return d.y; })
        group.selectAll('path')
                .data([data])
                .enter()
                .append('path')
                .attr('d', line)
                .attr('fill', 'none')
                .attr('stroke', '#000')
                .attr('stroke-width', 10);
  }

  createCharts() {
    var options = {
      d3Module: d3
    };

    d3.select('svg').remove();

    const element = this.chartContainer.nativeElement;
    const data = this.data;

    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;

    const x = d3scale
      .scaleBand()
      .rangeRound([0, contentWidth])
      .paddingInner(0.1)
      .domain(data.map(d => d.letter));

    const y = d3scale
      .scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, d3.max(data, d => d.frequency)]);

    const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3axis.axisBottom(x));

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3axis.axisLeft(y).ticks(10, '%'))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Frequency');

    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.letter))
      .attr('y', d => y(d.frequency))
      .attr('width', x.bandwidth())
      .attr('height', d => contentHeight - y(d.frequency));
  }
  // ngOnInit(){

  // }

  // ngOnInit() {
  //   // this._weekData.dailyForcast()
  //   //     .subscribe(res => {
  //   //       console.log(res);
  //   //     })

  //       let dataSet = [10, 20, 30, 40];

  //       //this.canvas = document.getElementById("canvass");
  //       //this.ctx = this.canvas.getContext('2d');
  //       //this.chart = new Chart(this.ctx, {
  //       this.chart = new Chart(this.chartRef.nativeElement, {
  //         type: 'bar',
  //         data: dataSet
  //       })
  // }

}
