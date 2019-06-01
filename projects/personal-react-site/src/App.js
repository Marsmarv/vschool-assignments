import React from 'react'
import './styles.css'
import Bored from './Bored'
import Navbar from './Navbar'
import Youtube from './Youtube'
import Tacos from './Tacos'
import Quotes from './Quotes'
import Shibas from './Shibas'
import Strains from './Strains'
import Memes from './Memes'

import {withVideo}from './GlobalProvider'
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Strains} />
        <Route path='/Bored' component={Bored} />
        <Route path='/Tacos' component={Tacos} />
        <Route path='/Quotes' component={Quotes} />
        <Route path='/Shibas' component={Shibas} />
        <Route path='/Youtube' component={Youtube} />
        <Route path='/Memes' component={Memes} />
      </Switch>
    </>
  )
}

export default withVideo(App)