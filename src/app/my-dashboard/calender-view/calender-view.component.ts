import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { CalenderData } from './calender-data'

@Component({
  selector: 'app-calender-view',
  templateUrl: './calender-view.component.html',
  styleUrls: ['./calender-view.component.css']
})
export class CalenderViewComponent implements OnInit {

  ngOnInit(){}
  // @ViewChild('chart')
  // private chartContainer: ElementRef;

  // data: CalenderData[];
  // weekday: string = 'sunday';
  // cellSize: number = 17;
  // constructor() { }

  // ngOnInit() {
  //   this.data = this.getData();
  //   // this.data = [
  //   //   {
  //   //     "date": "2019-05-01",
  //   //     "value": 0.08167
  //   //   },
  //   //   {
  //   //     "date": "2019-05-01",
  //   //     "value": 0.08167
  //   //   },
  //   //   {
  //   //     "date": "2019-05-01",
  //   //     "value": 0.08167
  //   //   },
  //   //   {
  //   //     "date": "2019-05-01",
  //   //     "value": 0.08167
  //   //   },
  //   //   {
  //   //     "date": "2019-05-01",
  //   //     "value": 0.08167
  //   //   },
  //   //   {
  //   //     "date": "2019-05-01",
  //   //     "value": 0.08167
  //   //   },
  //   //   {
  //   //     "date": "2019-05-01",
  //   //     "value": 0.08167
  //   //   }
  //   // ]
  //   this.createCalenderView();
  // }

  // createCalenderView() {
  //   var height = height = 153;
  //   var cellSize = 17;
  //   var width = 964;
  //   var weekday = 'weekday';
  //   let element = this.chartContainer.nativeElement;

  //   const canvas = d3.select(element)
  //     .append('svg')
  //     .attr('width', '100%')
  //     .attr('height', '200');

  //   const years = d3.nest()
  //     .key((d: CalenderData) => d.date.getUTCFullYear())
  //     .entries(this.data)
  //     .reverse();

  //   const year = canvas.selectAll("g")
  //     .data(years)
  //     .join("g")
  //     .attr("transform", (d, i) => `translate(40,${height * i + cellSize * 1.5})`);

  //   year.append("text")
  //     .attr("x", -5)
  //     .attr("y", -5)
  //     .attr("font-weight", "bold")
  //     .attr("text-anchor", "end")
  //     .text('yello');

  //   year.append("g")
  //     .attr("text-anchor", "end")
  //     .selectAll("text")
  //     .data((weekday === "weekday" ? d3.range(2, 7) : d3.range(7)).map(i => new Date(1995, 0, i)))
  //     .join("text")
  //     .attr("x", -5)
  //     .attr("y", d => (this.countDay(d) + 0.5) * cellSize)
  //     .attr("dy", "0.31em")
  //     .text(this.formatDay);

  //   year.append("g")
  //     .selectAll("rect")
  //     .data(d => d.values)
  //     .join("rect")
  //     .attr("width", cellSize - 1)
  //     .attr("height", cellSize - 1)
  //     .attr("x", (d: CalenderData) => this.timeWeek.count(d3.utcYear(d.date), d.date) * cellSize + 0.5)
  //     .attr("y", (d: CalenderData) => this.countDay(d.date) * cellSize + 0.5)
  //     .attr("fill", 'red')
  //     .append("title")
  //     .text((d: CalenderData) => `${this.formatDate(d.date)}: ${this.format(d.value)}`);

  //   const month = year.append("g")
  //     .selectAll("g")
  //     .data(d => d3.utcMonths(d3.utcMonth(d.values[0].date), d.values[d.values.length - 1].date))
  //     .join("g");

  //   month.filter((d: CalenderData, i: number) => i).append("path")
  //     .attr("fill", "none")
  //     .attr("stroke", "#fff")
  //     .attr("stroke-width", 3)
  //     .attr("d", this.pathMonth);

  //   month.append("text")
  //     .attr("x", d => this.timeWeek.count(d3.utcYear(d), this.timeWeek.ceil(d)) * cellSize + 2)
  //     .attr("y", -5)
  //     .text(this.formatMonth);

  //   // const year = canvas.selectAll('g')
  //   //                     .append('text')
  //   //                     .attr('x', '-5')
  //   //                     .attr('y', '-5')
  //   //                     .attr("font-weight", "bold")
  //   //                     .attr("text-anchor", "end")
  //   //                     .text('year value');

  //   // year.append('g')
  //   //     //.attr('text-anchor', 'end')
  //   //     .selectAll('rect')
  //   //     .data(d => d.values)
  //   //     .join('rect')
  //   //     .attr('width' , 16)
  //   //     .attr('height', 16)
  //   //     .attr("x", d => timeWeek.count(d3.utcYear(d.date), d.date) * cellSize + 0.5)
  //   //     .attr("y", d => countDay(d.date) * cellSize + 0.5)
  //   //     .attr("fill", d => color(d.value))
  // }

  // timeWeek = this.weekday === "sunday" ? d3.utcSunday : d3.utcMonday
  // countDay = this.weekday === "sunday" ? d => d.getUTCDay() : d => (d.getUTCDay() + 6) % 7
  // format = d3.format("+.2%");
  // formatDate = d3.utcFormat("%x");
  // formatDay = d => "SMTWTFS"[d.getUTCDay()];
  // formatMonth = d3.utcFormat("%b");
  // //color = d3.scaleSequential(d3.interpolatePiYG).domain([-0.05, 0.05]);

  //  getData() {
  //   const data = d3.csv("https://gist.githubusercontent.com/mbostock/354a9c93174a17eb6b80f4678e3d3ae9/raw/9d20ec96a40cc3fd5b8ddc9a306bd7397d5cfd16/dji.csv", d3.autoType);
  //   return d3.pairs(data, ({ close: previous }, { date, close }) => {
  //     return { date, value: (close - previous) / previous };
  //   });
  // }

  // pathMonth(t) {
  //   const n = this.weekday === "weekday" ? 5 : 7;
  //   const d = Math.max(0, Math.min(n, this.countDay(t)));
  //   const w = this.timeWeek.count(d3.utcYear(t), t);
  //   return `${d === 0 ? `M${w * this.cellSize},0`
  //     : d === n ? `M${(w + 1) * this.cellSize},0`
  //       : `M${(w + 1) * this.cellSize},0V${d * this.cellSize}H${w * this.cellSize}`}V${n * this.cellSize}`;
  // }
}
