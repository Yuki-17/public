import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import HeaderTiltles from './AppheaderTitles';
import Headers from './AppHeaders';
import DataBlock from './AppDataTitles';



const useStyles = makeStyles({
  table: {
    
    minWidth: 300,
    minheight:630,
    border: 'fill 1px'
  },
});
const useStyles1 = makeStyles({
  table: {
    border: '1px solid  #000',
    width: 200,
    margin: 0,
    padding: 0
  },
});




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
{name:"姉崎"},
{name:"富津"},
{name:"田無"}
]
const c =[

{name:"1号機"},
{name:"2号機"},
{name:"3号機"},
]

const d =["1号機","2号機","3号機"]
const f =["燃料種別","基地",""]
const g =1

const e =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
console.log(1);
export default function SimpleTable() {

  return (
<div>
  <div className='header'>
    <div className='haisentitle'>配船計画</div>
  <span className='headerbutton'>
    <button >ハードコピー</button>
    <button >ヘルプ</button>
    </span>
  </div>

    <div className="tableall">
      <span className="tablehead">
        <div>
        <HeaderTiltles />
        <Headers />
        </div>
      </span>
      <span className="tabledata">
        <DataBlock />
      </span>
    </div>
    </div>  
  );
}