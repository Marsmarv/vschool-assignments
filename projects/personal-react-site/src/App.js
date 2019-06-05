import React, {Component} from 'react'
import './styles.css'
import Bored from './Bored'
import Navbar from './Navbar'
import Youtube from './Youtube'
import Tacos from './Tacos'
import Quotes from './Quotes'
import Shibas from './Shibas'
import Strains from './Strains'
import Memes from './Memes'
import Footer from './Footer'
import Home from './Home'


import {withVideo}from './GlobalProvider'
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render(){
  return (
    <div className="frame">
      <Navbar/>
      {/* <Home /> */}
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Strains'>
          { ({ match }) =>  <Strains show={match !== null} /> }
        </Route>
        <Route path='/Bored'>
          { ({ match }) =>  <Bored show={match !== null} /> }
        </Route>
        <Route path='/Tacos' component={Tacos} />
        <Route path='/Quotes' component={Quotes} />
        <Route path='/Shibas' component={Shibas} />
        <Route path='/Youtube' component={Youtube} />
        <Route path='/Memes' component={Memes} />
      </Switch>
      <Footer/>
    </div>
  )
}
}

export default withVideo(App)