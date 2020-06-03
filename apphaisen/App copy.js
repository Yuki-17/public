import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Apphaisen from './App-haisen';
import './App.css';
//import Apphatuden from './Apphatuden';
const App = () => (
  <BrowserRouter>
    <div>
       <Link to='/'></Link>
       <Link to='/plan'></Link>
      <Route exact path='/' component={Home} />
      <Route path='/plan' component={hatuden} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const hatuden = () => (
  <div>
    <Route exact path='/plan' component={List} />
    <Route path='/plan/haisen' component={haisen} />
  </div>
)

const List = () => (
  
  <div>
    <title>sssssss</title>
    <h2>発電計画リスト</h2>
    <div className = 'list'>
    <div>配船計画 <button><Link to='/plan/haisen'>表示</Link></button> <button>リスト登録</button> </div>
    <div>発電計画 <button>表示</button> <button>リスト登録</button></div>
    <div>発電計画 <button>表示</button> <button>リスト登録</button></div>
    <div>発電計画 <button>表示</button> <button>リスト登録</button></div>
    <div>発電計画 <button>表示</button> <button>リスト登録</button></div>
    <div>発電計画 <button>表示</button> <button>リスト登録</button></div>
    <div>発電計画 <button>表示</button> <button>リスト登録</button></div>
    <div>発電計画 <button>表示</button> <button>リスト登録</button></div>
    </div>
  </div>
)
const haisen = () => (
      <div>
        <Apphaisen />
      </div>
    )
 




export default App