import React from 'react';
import Room from './Room'
import Daily from './Daily'
import Student from './Student'

const App = () => {
  return (
    <div className="main-container">
      <Room />
      <Daily />
      <Student />
    </div>
  )
}

export default App