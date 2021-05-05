import React from 'react';
import { makeStyles,createMuiTheme,responsiveFontSizes } from '@material-ui/core/styles';



export default function VerticalLinearStepper(args) {
  const data = args.data;
  const width = args.width;
  const height = args.height;

  var timecount = [];
  var station = [];
  for (let i = 0; i < data.length; i++) {
    station.push(data[i].name)
  }
  station.reverse();
  for (let d = 0; d < data[0].length; d++) {
   timecount.push(data[0][d].x) 
  }
  const hei = (height-50-30-50) / data.length + 'px';
  const fonthei = (height-50-30-50) / data.length - 5 + 'px';
  const rosenColor = 'blue';
  
  const useStyles = makeStyles(a => ({
    headAll: {
      marginTop: 30,
      width: width,
      height: '800px',
      display: 'inline-block',
      verticalAlign: 'top',
      backgroundColor: 'red',
    },
    stationOuter: {
      float: 'left'
    },
    stationInner: {
      width: (width * 0.6) + 'px',
      height: hei,
      textAlign: 'left',
      fontSize: '22px',
    },
    rosenOuter: {
      position: 'absolute',
      marginTop: 30,
      marginLeft: 30,
    },
    rosenAll: {
      width: (width * 0.4) + 'px',
      position: 'relative',
      left: (width * 0.6) + 'px',
      backgroundColor: 'white',
    },
    rosenCircle: {
      width: hei,
      height: hei,
      '&:nth-child(odd)': {
        borderRadius: '50%',
        border: 'solid 10px ' + rosenColor,
        backgroundColor: 'white',
        boxSizing: 'border-box'
      }
    },
    rosenBar: {
      width: hei,
      height: hei,
      // backgroundColor: 'linear-gradient(blue, pink)',
      backgroundColor: 'linear-gradient(90deg, transparent 30%, ' + rosenColor + ' 30%, ' +  rosenColor + ' 70%, transparent 70%)' ,
      // backgroundImage: 'linear-gradient(to top, #000, #000) repeat-y center/1px',
      '&:first-child': {
        marginTop: '10px',
      },
      '&:last-child': {
        height: '5px',
      }
    }
  }));
  const classes = useStyles();
  let kc = 0;
  var aaa = 
  <div className = {classes.stationOuter}>
    {station.map(function (value) {
      kc = kc + 1;
      return <div key={value + kc} className={classes.stationInner}>{value}</div>
    })}
  </div>

  var bbb = 
  <div className={classes.rosenOuter}>
    {station.map(function (value) {
      kc = kc + 1;
      return <div key={value + kc} className={classes.rosenCircle}></div>
    })}
  </div>
  var ccc =
  <div className={classes.rosenOuter}>
    {station.map(function (value) {
      kc = kc + 1;
      return <div key={value + kc} className={classes.rosenBar}></div>
    })}
  </div>

  var ddd =
    <div className={classes.rosenAll}>
      {ccc}
      {bbb}
    </div>
    
  return (
    <div className={classes.rosenOuter}>
      {aaa}
      {ddd}
    </div>
  );
}