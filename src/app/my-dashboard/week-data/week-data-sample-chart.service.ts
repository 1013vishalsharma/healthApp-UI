import { Injectable } from '@angular/core'
import * as d3 from "d3";
import * as d3scale from "d3-scale";
import * as d3axis from "d3-axis";

@Injectable({
    providedIn: 'root'
})
export class SampleCharts{
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
    // var canvas = d3.select('body')
    //                 .append('svg')
    //                 .attr('width', 500)
    //                 .attr('height', 500);

    // var data = [
    //               { x:10, y:20 },
    //               { x:40, y:60 },
    //               { x:50, y:70 }
    //             ]

    // var group = canvas.append('g')
    //                   .attr('transform', 'translate(100,100)');
    
    // var line = d3.line()
    //             .x(function (d){ return d.x; })
    //             .y(function (d){ return d.y; })
    //     group.selectAll('path')
    //             .data([data])
    //             .enter()
    //             .append('path')
    //             .attr('d', line)
    //             .attr('fill', 'none')
    //             .attr('stroke', '#000')
    //             .attr('stroke-width', 10);
  }

}

