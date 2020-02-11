import React from 'react';
import Room from './components/Room'
import Daily from './components/Daily'
import Desk from './components/Desk'
import Student from './components/Student'
// import Home from './components/Home'
import './components/styles.css'

import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="main-container">
      
      {/* <Room /> */}
      <Desk />
      {/* <Student /> */}
      {/* <Daily /> */}
    </div>
  )
}

export default App