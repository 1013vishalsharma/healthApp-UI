import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HealthData } from './health-progress-data';
import * as d3 from 'd3';

@Component({
  selector: 'app-progress-donut-chart',
  templateUrl: './progress-donut-chart.component.html',
  styleUrls: ['./progress-donut-chart.component.css']
})
export class ProgressDonutChartComponent implements OnInit {
  @ViewChild('progressChart')
  private chartContainer: ElementRef;

  data: HealthData[];

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        name: 'unhealthy',
        value: 50
      },
      {
        name: 'healthy',
        value: 50
      }
    ]
    this.createProgressDonutChart();
  }

  createProgressDonutChart(){
    var options = {
      d3Module: d3
    };

    const element = this.chartContainer.nativeElement;

    var total = 0;
    this.data.forEach(element => {
        total += element.value;
    });
    console.log(total);

    var ratio = 1 - this.data[0].value/total;
    console.log(ratio);

    let width = 300;
    let height = 300;

    let valArr = [];
    this.data.forEach(element => {
      valArr.push(element.value);
    })

    var pie1 = d3.pie().value((d: HealthData) => { return d.value})
    console.log(pie1(this.data));

    let outerRadius = (width/2)-35;
    let innerRadius = 75;

    let color: any = d3.scaleOrdinal(['rgb(228, 63, 63)','rgb(14, 101, 177)']);

    let arc: any = d3.arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius);

    let arcLine = d3.arc()
                    .innerRadius(innerRadius-13)
                    .outerRadius(innerRadius-10)
                    .startAngle(0);

    const canvas = d3.select(element)
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height)
                    .attr('class','shadow')
                    .append('g')
                    .attr('transform', 'translate(' + (width)/2 + ',' + (height)/2 +')')

    let path = canvas.selectAll('path')
                      .data(pie1(this.data))
                      .enter()
                      .append('path')
                      .attr('d', arc)
                      .attr('fill', function(d: any,i){
                        return color(i)});

    let pathLine = canvas.append('path')
                          .datum({'endAngle': 0})
                          .attr('d', arcLine)
                          .attr('fill', 'unhealthy');


    var text: any = canvas.selectAll('.legend')
                          .data(<any>pie1(this.data))
                          .enter()
                          .append("text")
                          .attr('class','legend')
                          .attr("transform", function (d) {
                              var c=arc.centroid(d);
                              return "translate(" +(c[0] *1.6)+','+(c[1]*1.6) + ")";
                          })
                          .attr("dy", ".4em")
                          .attr("text-anchor", "middle")
                          .text(function(d){return d.data.name+' ('+Math.floor((d.data.value/total)*100)+')';
                          })
                          //
                          .attr('fill', function(d: HealthData,i){
                            return color(i)})
                          .attr('font-size','12px')
                          //.append('br')
                          //.append('text','here we are')
                          //.text(function(d){return 'days: ' + d.data.value})

      var middleCount=canvas.append('text')
                          .datum(total)
                          .text(function(d){
                              return 0;
                          })
                          .attr('class','middleText')
                          .attr('text-anchor','middle')
                          .attr('dy','10')
                          .attr('fill',color('healthy'))
                          .attr('font-size','25px')
               
      var arcTween=function(transition, newAngle) {
                      transition.attrTween("d", function (d) {
                          var interpolate = d3.interpolate(d.endAngle, newAngle);
                          var interpolateCount = d3.interpolate(0, total);
                          return function (t) {
                              d.endAngle = interpolate(t);
                              middleCount.text(Math.floor(interpolateCount(t))+ ' days');
                              return arcLine(d);
                          };
                      });
                  };
               
               
                  var animate=function(){
                      pathLine.transition()
                              .duration(750)
                              .call(arcTween,((2*Math.PI))*ratio);
               
               
                  };
               
                  setTimeout(animate,500);
              
  }

}
