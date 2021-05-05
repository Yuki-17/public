import './App.css';
import React,{Component} from 'react';
import App1 from './AppHeaders';
import App2 from './AppDataTitles';

const wid = 200;
const hei = 500;

export default class SimpleTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: wid,
      height: hei,
      width1: wid * 0.2,
      width2: wid * 0.8,
      data: [
        {name: "aa", data: [{x: '',y: 0},{x: '',y: 100},{x: '',y: 100},{x: '',y: 100},{x: '',y: 100},]},
        //{name: "aa", data: [{x: '00:00',y: 0},{x: '00:30',y: 100},{x: '00:00',y: 100},{x: '00:30',y: 100},{x: '00:00',y: 100},]},
        {name: "bb", data: [{x: '00:00',y: 100},{x: '00:30',y: 100},{x: '00:00',y: 100},{x: '00:30',y: 100},{x: '00:00',y: 100},]},
        {name: "cc", data: [{x: '00:00',y: 100},{x: '00:30',y: 100},{x: '00:00',y: 100},{x: '00:30',y: 100},{x: '00:00',y: 100},]},
        {name: "dd", data: [{x: '00:00',y: 100},{x: '00:30',y: 100},{x: '00:00',y: 100},{x: '00:30',y: 100},{x: '00:00',y: 100},]},
        {name: "ee", data: [{x: '00:00',y: 100},{x: '00:30',y: 100},{x: '00:00',y: 100},{x: '00:30',y: 100},{x: '00:00',y: 100},]},
        {name: "ff", data: [{x: '00:00',y: 100},{x: '00:30',y: 100},{x: '00:00',y: 100},{x: '00:30',y: 100},{x: '00:00',y: 100},]},
        {name: "gg", data: [{x: '00:00',y: 100},{x: '00:30',y: 100},{x: '00:00',y: 100},{x: '00:30',y: 100},{x: '00:00',y: 100},]},
        {name: "hh", data: [{x: '00:00',y: 100},{x: '00:30',y: 100},{x: '00:00',y: 100},{x: '00:30',y: 100},{x: '00:00',y: 100},]},

      ]
    }
  }
  render() {
    const css = getStyle();
    //<App1 data={this.state.data} height={this.state.height} width={this.state.width1} />
    //<App2 data={this.state.data} />
    //      <div className='test'>123456789012345678901234567890123456789012345678901234567890</div>
    // leftmargin 20px
    // rightmargin 93px
    //

  return (
    <div className='All'>
      <style>{css}</style>      
        <table>
          <tr>
            <th class="fixed01">
              <App1 data={this.state.data} height={this.state.height} width={this.state.width1} />
            </th>
            <th className='dummy'>ccccc</th>
            <th className='fixed04'>
              <App2 data={this.state.data} />
            </th>
          </tr>
          <tr>
            <th class="fixed03">aaaaa</th>
            <th colSpan='2' class="fixed02">時間</th>
          </tr>
        </table>
    </div>
  )
  } 
}
/**
 * <div className='test'>
        <span className='test1'>a</span>
        <span className='test2'>b</span>
        <span className='c1'>c1</span>
        <span className='c2'>c2</span>
        <span className='c3'>c3</span>
      </div>
      <span className='testl'>
        <div className='test4'>d</div>
        <div className='test5'>e</div>
        <div className='test6'>f</div>
      </span>
 */
function getStyle() {
  const csses1 = `
  table{
    position: absolute;
    width: 1800px;
    height: 800px;
    table-layout: fixed;
    border-collapse: collapse; 
  }
  table.layout-fixed {
    table-layout: fixed;
  }
  th{
   // width: 300px;
   // height: 100px;
    text-align: right;
    vertical-align: top;
    //padding: 0 15px;
    //border: 1px solid #ccc;
    
  }
  .dummy {
    position: sticky;
    width:50px;
    height: 860;
    bottom: 0;
    left: 102px;
    color: #fff;
    background: blue;
    box-sizing: border-box;
    //border: 1px solid green;
    
    z-index: 4;
  }
  .fixed01 {
    position: sticky;
    width: 100px;
    height: 200px;
    bottom: 0px;
    left: 0px;
    color: #fff;
    //border: 10px solid green;
    background: black;
  }
  .fixed02{
    position: sticky;
    width: 1000px;
    height: 200px;
    bottom: 0;
    left: 0;
    color: black;
    text-align: left;
    background: white; 
  }
  .fixed03{
    position: sticky;
    width: 180px;
    height: 200px;
    bottom: 0;
    left: 0;
    color: red;
    background: white;
    z-index: 12;
  }

  .fixed01{
    z-index: 8;
  }
  .fixed02{
    z-index: 10;
  }
  .fixed04{
    z-index: 1;
  }



  .All {
    position:relative;
    width: 800px;
    height: 800px;
    background-color: white;
    overflow: scroll;
    //top: 10px;
    //left: 10px;
  }
  .top {
    overflow:scroll;
    width: 300px;
    height: 150px;
    background-color: green;
  }
  .head {
    position: sticky;
    top:0px;
    left:0px
    display: inline-block;
  }
  .data {
    //position: absolute;
    display: inline-block;
    //left: 100px;
  }
  .fooder {
    position: absolute;
    top: 150px;
    left: 200px;
  }
  .test {
    position: absolute;
    top: 300px;
    //left: 9px;
  }
  .testl {
    position: absolute;
    top: 0px;
    left: 300px;
  }
  .test1 {
    width: 400px;
    background-color:blue;
  }
  .test2 {
    width: 350px;
    background-color:green;
  }
  .c1 {
    width: 20px;
    background-color:pink;
  }
  .c2 {
    width: 100px;
    background-color:purple;
  }
  .c3 {
    width: 20px;
    background-color:pink;
  }
  .test4 {
    height: 460px;
    background-color:green;
  }
  .test5 {
    height: 50px;
    background-color: yellow;
  }
  .test6 {
    height: 50px;
    background-color:purple;
  }  
  `
  return csses1;
}