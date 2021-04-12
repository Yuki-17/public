import './AppData.css';
import React, { Component,useEffect,useState,useRef } from 'react';
import  set from'./AppSetting.js';
import { makeStyles } from '@material-ui/core/styles';
import { regexpToFunction } from 'path-to-regexp';

const e = [1,2,3,4,5,6,7,8,]
/*分割個数 */
//const rowCount = e.length;
const rowCount = 8


export default function AppDataTiltles(){
    var timecount = ['2020/01/01','2020/01/02','2020/01/03','2020/01/04','2020/01/05','2020/01/06','2020/01/07','2020/01/08']

    var a = timecount
    var sss = ""
    var s = "aaaaaaaa"
    useEffect(() => {
      console.log("sssss")
      

    },[]);
    console.log(a)
    sss = <div>{s}</div>
    var aaaa = <div className='dataTitleDay'>
    {a.map(c1 =>(
      
          <span className='data'>
            <div></div>
            <div className="databorder"></div>
            <div></div>
            <div className="databorder"></div>
            <div></div>
            <div className="databorder"></div>
            <div></div>
            <div className="databorder"></div>
            <div></div>
            
          </span>
          
        ))}
    </div>
  

    const css = getstyle();
    return (          
      <div >
        <style>{css}</style> 
        {aaaa} 
      </div>
    );
  }


function getstyle(){
  const csses1 = `
  .data div{
    border: 1px solid gray;
    
    text-align: center;
    width: 100px;  
    height: 50px;
    white-space:nowrap;
    border-left: none;
    border-bottom: none;
  }  
  `
  return csses1
}