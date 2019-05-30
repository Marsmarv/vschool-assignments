import React from 'react'
// import './syles.css'
import Bored from './Bored'
import Navbar from './Navbar'
import Youtube from './Youtube'
import {withVideo}from './GlobalProvider'

import { Switch, Route } from "react-router-dom";

const App = () => {

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Youtube} />
        <Route path='/Bored' component={Bored} />
      </Switch>

    </>
  )
  
}

export default withVideo(App)