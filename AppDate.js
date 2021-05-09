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
  const boxheight = args.height;
  const boxwidth = args.width;
  var allwidth = (boxwidth * data[0].data.length) + rigthmargin + 1
  if (legendon === true) {
    allwidth = allwidth + legendwidth + 32;
  }
  var spanwidth = boxwidth;
  var spanspace = boxheight - (boxwidth / 2);
  var spanspace2 = 0;
  var dates = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', ];

  if ((boxheight * 2 - boxwidth) <= 0) {
    spanwidth = boxheight * 2;
    //spanspace = boxwidth - (boxheight * 2);
    spanspace2 = boxwidth - boxheight * 2

  }
console.log(boxwidth)
console.log(boxheight)
console.log(spanwidth)
console.log(spanspace)
console.log(spanspace2)
  const useStyles = makeStyles(a => ({
    a: {
      //marginTop: 30,
      width: spanwidth,
      textAlign: 'center',
      //  height: '800px',
      //display: 'inline-block',
      //verticalAlign: 'top',
      //backgroundColor: 'red',
    },
    b: {
      width: spanspace2,
      backgroundColor: 'blue',

    },
    c: {
      width: spanspace,
      backgroundColor: 'green',

    },
    All: {
      width: '2500px',
    }
    
  }));
  const classes = useStyles();
  var aaaa = <div><span className={classes.c}></span>
  {dates.map(c1 =>(
    <span>
      <span className={classes.a}>{c1}</span>
      <span className={classes.b}></span>
      </span>
  ))}
  </div>
  return <div iclassName={classes.All}>
    {aaaa}
  </div>
    
}
//