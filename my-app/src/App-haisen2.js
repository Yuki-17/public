import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';



export default function SimpleTable() {
 var products = [{
      id: 1,
      name: "Product4",
      price: 900
  }, {
      id:1,
      name: "Product3",
      price: 800
  },{
    id1:1,
    name: "Product3",
    price: 800
}];

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];



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
 const qualityType = {
    0: 'good',
    1: 'bad',
    2: 'unknown'
  };
  const inStockStatus = {
    1: 'yes',
    2: 'no'
  };


  function enumFormatter(cell, row, enumObject) {
  return `<i class="thead-dark"> ${cell}</i>`;
}




function isExpandableRow(row) {
  if (row.id < 2) return true;
    else return false;
}
function expandComponent(row) {
  return (
   `<i class="thead-dark"> ${row}</i>`
  );
}
function priceFormatter(cell, row) {
  return `<i class="thead-dark"> ${cell}</i>`;
}
  return (
    <div>
  <BootstrapTable keyField='id1' data={ products } columns={ columns } />
  
    </div>
  );
}