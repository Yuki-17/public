import './AppHeaders.css';
import React, { Component } from 'react';
import  set from'./AppSetting.js';






function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const a = {name:"LNG"}
const b = [
{name:"東扇島"},
{name:"富津"},
{name:"袖ヶ浦"},

]

/*分割個数 */
const rowCount = b.length;
console.log(rowCount)

const c =[

{name:"1号機"},
{name:"2号機"},
{name:"3号機"},
{name:"1号機"},
{name:"2号機"},
{name:"3号機"},
{name:"1号機"},
{name:"2号機"},
{name:"3号機"},
]

const d =["1号機","2号機","3号機"]
const f =["燃料種別","基地",""]
const g =1
const hhh = "<div>aaaaaaaaaaa</div>"
const e =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

const aaa = new set();
const bbb = aaa.getter()
console.log(bbb);


export default function SimpleTable() {

  return (          
    
      <table>
<tr>
<td>1行目</td>
<td>2列目</td>
</tr>
<tr>
<td>2行目</td>
<td>2列目</td>
</tr>
</table>
      
    
    

    
 

  );
}