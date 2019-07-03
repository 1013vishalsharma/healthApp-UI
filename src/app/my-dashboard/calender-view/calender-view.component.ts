import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { CalenderData } from './calender-data'
import * as d3ScaleChro from 'd3-scale-chromatic';
import { CalenderViewService } from './calender-view.service';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-calender-view',
  templateUrl: './calender-view.component.html',
  styleUrls: ['./calender-view.component.css']
})
export class CalenderViewComponent implements OnInit {

  @ViewChild('chart')
  private chartContainer: ElementRef;

  data: CalenderData[];

  constructor(private calenderService: CalenderViewService, private route: ActivatedRoute){}

  ngOnInit(){
    this.data= [];
    this.data = this.route.snapshot.data.calD;
    _.forEach(this.data, (calData, index) => {
      console.log(calData.day)
      console.log(calData.count)
      calData.day = calData.day.toLocaleString().split('T')[0];
      let cd = new CalenderData(calData.day, calData.count);
      this.data[index] = cd;
    });
    console.log(this.data)
    this.createCalenderView(this.data);
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
        cellSize = 18;

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

    svg.append('text')
          .attr('class', 'month-name')
          .attr('y', (cellSize * 7) + (cellMargin * 8) + 15)
          .attr("x", function(d) {
            var columns = weeksInMonth(d);
            return (((cellSize * columns) + (cellMargin * (columns + 1))) / 2);
          })
          .attr("text-anchor", "middle")
          .text(function(d) { return monthName(d); })

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
          .style("fill", function(d) { return d3ScaleChro.interpolatePuBu(scale(lookup[d])) })
          .select("title")
          .text(function(d) { return titleFormat(new Date(d)) + ":  " + lookup[d]; });
  }


  async getData() {
    let i = 0;
    await d3.csv("../assets/data.csv", (csvData) => {
      this.data[i++] = new CalenderData((csvData.day), csvData.count);
    })
  }

  async getCalenderViewData(){
    await this.calenderService.calenderViewData().subscribe((data: {}) => {
      console.log(data);
      let stats: CalenderData[];
      _.forEach(data, (calData, index) => {
        console.log(calData.day)
        console.log(calData.count)
        let cd = new CalenderData(calData.day, calData.count);
        this.data[index] = cd;
      });
      console.log("data is " + this.data)
    });
  }
}
