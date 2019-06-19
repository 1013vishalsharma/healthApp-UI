import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { CalenderData } from './calender-data'
import * as d3Interpolate from 'd3-interpolate';


@Component({
  selector: 'app-calender-view',
  templateUrl: './calender-view.component.html',
  styleUrls: ['./calender-view.component.css']
})
export class CalenderViewComponent implements OnInit {

  @ViewChild('chart')
  private chartContainer: ElementRef;

  data: CalenderData[];

  ngOnInit(){
    this.data= [];
    this.getData().then(() => {
      console.log(this.data)

      this.createCalenderView(this.data);
    })
    
  }

  createCalenderView(dateData){
    let weeksInMonth = function(month) {
      let m = d3.timeMonth.floor(month);
      return d3.timeWeeks(d3.timeWeek.floor(m), d3.timeMonth.offset(m,1)).length;
    }

    var minDate = d3.min(dateData, (d: CalenderData) => {return new Date(d.day)});
    var maxDate = d3.max(dateData, (d: CalenderData) => {return new Date(d.day)});
    console.log(minDate + " " + maxDate)
    minDate = new Date(new Date().getFullYear(), 0,1);
    maxDate = new Date(new Date().getFullYear(), 11, 31);
    console.log(minDate + " " + maxDate)
    
    var cellMargin = 2,
        cellSize = 18.5;

    var day:any = (d3.timeFormat("%w")),
        week:any = d3.timeFormat("%U"),
        format = d3.timeFormat("%Y-%m-%d"),
        titleFormat = d3.utcFormat("%a, %d-%b"),
        monthName = d3.timeFormat("%B"),
        months= d3.timeMonth.range(d3.timeMonth.floor(minDate), maxDate);

    let element = this.chartContainer.nativeElement;
        
    const svg = d3.select(element)
                      .selectAll('svg')
                      .data(months)
                      .enter()
                      .append('svg')
                      .attr('width', function(d) {
                        var columns = weeksInMonth(d);
                        return ((cellSize * columns) + (cellMargin * (columns + 1)));
                      })
                      .attr('height',  ((cellSize * 7) + (cellMargin * 8) + 20))
                      .append('g')
    //

    svg.append('text')
          .attr('class', 'month-name')
          .attr('y', (cellSize * 7) + (cellMargin * 8) + 15)
          .attr("x", function(d) {
            var columns = weeksInMonth(d);
            return (((cellSize * columns) + (cellMargin * (columns + 1))) / 2);
          })
          .attr("text-anchor", "middle")
          .text(function(d) { return monthName(d); })

    var i = 1, j=1;
    var rect = svg.selectAll("rect.day")
          .data(function(d, i) { return d3.timeDays(d, new Date(d.getFullYear(), d.getMonth()+1, 1)); })
          .enter().append("rect")
          .attr("class", "day")
          .attr("width", cellSize)
          .attr("height", cellSize)
          .attr("rx", 3).attr("ry", 3) // rounded corners
          .attr("fill", '#eaeaea') // default light grey fill { let a = (i * cellSize) + (i * cellMargin) + cellMargin; i++; return a; })
          .attr("y", function(d) { return (day(d) * cellSize) + (day(d) * cellMargin) + cellMargin; })
          .attr("x", function(d) { return ((week(d) - week(new Date(d.getFullYear(),d.getMonth(),1))) * cellSize) + ((week(d) - week(new Date(d.getFullYear(),d.getMonth(),1))) * cellMargin) + cellMargin ; })
          .on("mouseover", function(d) {
            d3.select(this).classed('hover', true);
          })
          .on("mouseout", function(d) {
            d3.select(this).classed('hover', false);
          })
          .datum(format);


      rect.append("title")
          .text(function(d) { return titleFormat(new Date(d)); });
      
        var lookup = d3.nest<CalenderData, number>()
          .key(function(d) { return d.day; })
          .rollup(function(leaves) {
            return d3.sum(leaves, function(d: CalenderData){ return (d.count); });
          })
          .object(dateData);
      
        var scale = d3.scaleLinear()
          .domain(d3.extent(dateData, function(d: CalenderData) { return (d.count); }))
          .range([0.4,1]); // the interpolate used for color expects a number in the range [0,1] but i don't want the lightest part of the color scheme
      
        rect.filter(function(d) { return d in lookup; })
          .style("fill", function(d) { return d3.interpolatePuBu(scale(lookup[d])); })
          .select("title")
          .text(function(d) { return titleFormat(new Date(d)) + ":  " + lookup[d]; });
      

  }


  async getData() {
    let i = 0;
    await d3.csv("../assets/data.csv", (csvData) => {
      this.data[i++] = new CalenderData((csvData.day), csvData.count);
    })


                // .then((value) => {
                //   console.log(value.length)
                //   console.log(value[0])
                //   this.data[0] = new CalenderData(value[0].day, value[0].count)
                //   console.log(this.data)
                // }) 
  }

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

  // pathMonth(t) {
  //   const n = this.weekday === "weekday" ? 5 : 7;
  //   const d = Math.max(0, Math.min(n, this.countDay(t)));
  //   const w = this.timeWeek.count(d3.utcYear(t), t);
  //   return `${d === 0 ? `M${w * this.cellSize},0`
  //     : d === n ? `M${(w + 1) * this.cellSize},0`
  //       : `M${(w + 1) * this.cellSize},0V${d * this.cellSize}H${w * this.cellSize}`}V${n * this.cellSize}`;
  // }
}
