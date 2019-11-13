import React from 'react'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Myself from './Myself'
import './styles.css'
import ProgressBar from "react-scroll-progress-bar";
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-151307007-1');
  ReactGA.pageview('App.js');
  ReactGA.pageview('Resume.js')
}

const App = () => {
  initializeReactGA()
  return (
    <>
    <ProgressBar bgcolor="#E5960B"/>
    <Projects/>
    <Myself/>
    <Contact/>
    <Resume/>
    </>
  )
}

export default App