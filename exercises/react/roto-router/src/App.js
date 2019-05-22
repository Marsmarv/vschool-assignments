import React from 'react'
import Navbar from './Navbar'
import './styles.css'
import About from './About'
import Home from './Home'
import Footer from './Footer'
import Services from './Services'

import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/services' component={Services} />
            <Route path='/' component={Home} />
        </Switch>
        <Footer />
    </>
  )
}

export default App