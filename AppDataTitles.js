import './AppData.css';
import React, { Component,useEffect,useState,useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactApexChart from 'react-apexcharts';



export default function AppDataTiltles(args){
  const data = args.data;
  const legendon = false;
  const rigthmargin = 8;
  const topmargin = 30;
  const bottommargin = 30;
  const legendwidth = 100;
  const boxborder = 2;
  const boxheight = 100;
  const boxwidth = 100;
  var allwidth = (boxwidth * data[0].data.length) + rigthmargin + 1
  if (legendon === true) {
    allwidth = allwidth + legendwidth + 32;
  }
  var allheight = (boxheight * data.length) + topmargin + bottommargin;
  console.log(allwidth)
  console.log(allheight)
  //const allheight = args.height;
  const leftmargin = allwidth - (boxwidth * data[0].data.length) - rigthmargin;
  console.log(leftmargin)
  var state = {          
    series: data, 
    options: {
      chart: {
        height: allheight,
        type: 'heatmap',
        background: 'red',
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        //show:true,
        type: 'category',
        labels:{
          show:false,
          minHeight: topmargin,
          maxHeight: topmargin,
        },
        //floating: true,
        //offsetX: -60,
        //offsetY:50,
        tooltip: false,
        //categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30']
      },
      yaxis: {
        show: false,
        labels: {
          minWidth: 0,
          maxWidth: 0,
        }
      },
      title: {
        //text: 'HeatMap Chart (Different color shades for each series)',
        align: 'left',
      },
      legend: {
        show: legendon,
        position: 'right',
        width: 100,
        height: 100,
        //floating: true,
        //offsetX: 0,
        //offsetY: 0,

      },
      plotOptions: {
        heatmap: {
            radius: 2,
            enableShades: true,
            shadeIntensity: 0.5,
            reverseNegativeShade: true,
            distributed: false,
            useFillColorAsStroke: false,
            colorScale: {
              ranges: [{
                  from: -30,
                  to: 5,
                  color: '#00A155',
                  name: '新新新新新新',
                },
                {
                  from: 6,
                  to: 20,
                  color: '#128FD9',
                  name: 'xxediumxxxxx',
                },
                {
                  from: 21,
                  to: 45,
                  color: '#FFB200',
                  name: 'high',
                }
              ]
            }
        }
    },
      grid: {
        position: 'front',
        borderColor:'black',
        padding: {
          top:0,
          bottom: bottommargin * -1,
          left:1,
          right: 0,
        }
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: ['black'],
        width: 2  ,
        dashArray: 0,      
    }
    },  
  };
        
  return <div id="chart">
  <ReactApexChart options={state.options}
                  series={state.series} 
                  type="heatmap" 
                  width={allwidth} 
                  height={allheight} />
</div>
    
}