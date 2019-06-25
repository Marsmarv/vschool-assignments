import React from 'react'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Myself from './Myself'
import './styles.css'
import ProgressBar from "react-scroll-progress-bar";

const App = () => {
  return (
    <>
    <ProgressBar bgcolor="#E5960B"/>
    <Projects/>
    <Resume/>
    <Contact/>
    <Myself/>
    </>
  )
}

export default App