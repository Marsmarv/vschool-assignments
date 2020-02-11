import React from 'react';
import Room from './components/Room'
import Desk from './components/Desk'
import Student from './components/Student'
import './components/styles.css'

const App = () => {
  return (
    <div className="main-container">
      <Room />
      <Desk />
      <Student />
    </div>
  )
}

export default App