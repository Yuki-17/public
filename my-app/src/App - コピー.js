import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ComposedChart, Area} from 'recharts';


class App_glahu extends React.Component{
render(){
const data = [
{num:1,time:"9:00",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:2,time:"10:00",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:3,time:"11:00",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:4,time:"12:00",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:5,time:"13:00",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10}
];


const data2 = [
{num:1,time:"9:00",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"9:05",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"9:10",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"9:15",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"9:20",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"9:25",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"9:30",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"9:35",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"9:40",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"9:45",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"9:50",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"9:55",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:2,time:"10:00",sekitan:12,macc:12,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"10:05",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"10:10",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"10:15",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"10:20",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"10:25",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"10:30",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"10:35",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"10:40",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"10:45",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"10:50",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"10:55",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:2,time:"11:00",sekitan:12,macc:12,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"11:05",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"11:10",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"11:15",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"11:20",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"11:25",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"11:30",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"11:35",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"11:40",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"11:45",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"11:50",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"11:55",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:2,time:"12:00",sekitan:12,macc:12,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"12:05",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"12:10",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"12:15",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"12:20",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"12:25",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"12:30",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"12:35",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"12:40",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"12:45",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"12:50",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"12:55",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:2,time:"13:00",sekitan:12,macc:12,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"13:05",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"13:10",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"13:15",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"13:20",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"13:25",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"13:30",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"13:35",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"13:40",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"13:45",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"13:50",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"13:55",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10},
{num:1,time:"14:00",sekitan:10,macc:10,acc:10,cc:10,lng:10,abura:10}
];



const data1 = [
{num:1,time:"9:00",sekitan:[1],macc:10,acc:10,cc:10,lng:10,abura:10},
{num:2,time:"9:30",sekitan:[2],macc:12,acc:10,cc:10,lng:10,abura:10},
{num:2,time:"10:00",sekitan:[2],macc:12,acc:10,cc:10,lng:10,abura:10},
{num:2,time:"10:30",sekitan:[2],macc:12,acc:10,cc:10,lng:10,abura:10},
{num:2,time:"11:00",sekitan:[2],macc:12,acc:10,cc:10,lng:10,abura:10},
{num:2,time:"11:30",sekitan:[2],macc:12,acc:10,cc:10,lng:10,abura:10},
{num:2,time:"12:00",sekitan:[2],macc:12,acc:10,cc:10,lng:10,abura:10},
{num:2,time:"12:30",sekitan:[2],macc:12,acc:10,cc:10,lng:10,abura:10},
{num:2,time:"13:00",sekitan:[2],macc:12,acc:10,cc:10,lng:10,abura:10},
{num:2,time:"13:30",sekitan:[2],macc:12,acc:10,cc:10,lng:10,abura:10},
{num:2,time:"14:00",sekitan:[2],macc:12,acc:10,cc:10,lng:10,abura:10}

];


console.log(data);
  return (
        <div className = "App1">  


       
        <ComposedChart className="bar" width = {900} height = {400} data = {data1}>       
        <XAxis dataKey="time" padding={{left:100,right:25}}/>
        <YAxis hide={false}/>
        <Bar dataKey="macc" barSize={72} stackId="a" fill="#808080"/>
        <Bar dataKey="macc" barSize={72} stackId="a"fill="#808080"/>
        <Bar dataKey="macc" barSize={72} stackId="a"fill="#808080"/>   
         </ComposedChart >


        <ComposedChart className="chr" width = {900} height = {400} data = {data2}>       9
          <XAxis dataKey="time" hide={true}/>
          <YAxis tick={false}/>
          <Bar dataKey="macc" stackId="a" />
          <Bar dataKey="macc" stackId="a" fill=""/>
          <Bar dataKey="macc" stackId="a" fill=""/>   
          <Line dataKey="macc"  type="monotone" stroke="#FF6111"/>
          <Line dataKey="sekitan"  type="monotone" stroke="#FF6600"/>

          <Tooltip />
        </ComposedChart >
        
 
        </div>
  )
}

 
}

export default App_glahu;
