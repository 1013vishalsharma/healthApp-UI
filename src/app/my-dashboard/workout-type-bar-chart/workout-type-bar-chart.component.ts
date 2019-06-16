import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { WorkoutType } from './workout-type';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';

@Component({
  selector: 'app-workout-type-bar-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './workout-type-bar-chart.component.html',
  styleUrls: ['./workout-type-bar-chart.component.css']
})
export class WorkoutTypeBarChartComponent implements OnInit {
  @ViewChild('barChart')
  private chartContainer: ElementRef;
  
  data: WorkoutType[];
  
  constructor() { }

  ngOnInit() {
    this.data = [
      {
        name: 'Chest',
        value: 2
      },
      {
        name: 'Back',
        value: 4
      },
      {
        name: 'Triceps',
        value: 5
      },
      {
        name: 'Biceps',
        value: 4
      },
      {
        name: 'Shoulders',
        value: 6
      },
      {
        name: 'Legs',
        value: 3
      },
      {
        name: 'Abs',
        value: 1
      }
    ]

    this.createStatsBarChart();
  }

  createStatsBarChart(){

    const element = this.chartContainer.nativeElement;
    const width = 500;
    const height = 300;

    const canvas = d3.select(element)
                      .append('svg')
                      .attr('width', width)
                      .attr('height', height+200);

    let xScale = d3.scaleBand()
                    .range([0, width])
                    .padding(.4)
                    .domain(this.data.map((d: WorkoutType) => { return d.name}))

    let yScale = d3.scaleLinear()
                    .range([height, 0])
                    .domain([0, d3.max(this.data, d => d.value)])
    
    let g = canvas.append('g')
                  .attr('transform', 'translate(' + 30 + "," + 20 + ")");
    
    g.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale));

    g.append("g")
      .call(d3.axisLeft(yScale).ticks(10))
      .append("text")
      .attr('class', 'y axis')
      .attr("y", 6)
      .attr("dy", "0.40em")
      .attr("text-anchor", "end")
      .text("value");

    let tip = d3Tip()
    .attr('class', 'd3-tip1')
    .offset([-10, 0])
    .html(function(d) {
      return "<strong>" + d.name + " :</strong> <span style='color:red'>" + d.value + "</span>";
    })

    canvas.call(tip);


    g.selectAll(".bar")
      .data(this.data)
      .enter().append("rect")
      .attr("class", "bar1")
      .attr("x", function(d: WorkoutType) { return xScale(d.name); })
      .attr("y", function(d: WorkoutType) { return yScale(d.value); })
      .attr("width", xScale.bandwidth())
      .attr("height", function(d: WorkoutType) { return height - yScale(d.value); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
  }

}
