import './App.css';
import React,{Component} from 'react';
import HeaderTiltles from './AppheaderTitles';
import Headers from './AppHeaders';
import DataBlock from './AppDataTitles';
import AppYMD  from './AppYMD';
import { makeStyles } from '@material-ui/styles';



/*const useStyles = makeStyles({
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
*/



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
export default class SimpleTable extends Component {
  render(){
  return (
<div>
  <div>
  <div>
      <span>
        <Headers />
      </span>
      <span className="tabledata">
        <DataBlock />
      </span>
      </div>
      </div>
      <div><AppYMD /></div>
    </div>  
  );
  }
}