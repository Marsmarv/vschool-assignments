import React from 'react';
import Room from './Room'
import Daily from './Daily'
import Student from './Student'
import {Link} from 'react-router-dom'

const Teacher = () => {
  return (
    <div className="main-container">
      <Link to="/" className="home"> Home </Link>
      <Room />
      <Daily />
      <Student />
    </div>
  )
}

export default Teacher