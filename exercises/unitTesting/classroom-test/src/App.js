import React from 'react';
import Teacher from './components/Teacher'
import Custodial from './components/Custodial'
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom'

import './components/styles.css'


const App = () => {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path= '/' component={Home}/>
        <Route path= '/Teacher' component={Teacher}/>
        <Route path= '/Custodial' component={Custodial}/>
      </Switch>
    </div>
  )
}

export default App