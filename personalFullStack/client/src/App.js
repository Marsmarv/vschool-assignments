import React from 'react'
import Spot from './Spotify/Spot'
import Main from './components/Main'
import Header from './components/Header'
import "./Spotify/Spot.css"
import "./components/styles.css"
import Login from './components/Login'
import Footer from './components/Footer';
import Art from './components/Art'
import Profile from './components/Profile'

import { Switch, Route } from 'react-router-dom'

const App = () => {
  return(
    <>
    <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/art' component={Art} />
        <Route path='/profile' component={Profile} />
      </Switch>
    <Footer />
    </>
  )
}

export default App