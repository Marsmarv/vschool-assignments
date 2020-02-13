import React from 'react';
import Daily from './Daily'
import Desk from './Desk'
import Room from './Room'
import {Link} from 'react-router-dom'

const Custodial = () => {
  return (
    <div className="custodial-container">
      <Link to="/" className="home"> Home </Link>
      <Room />
      <Desk />
      <Daily />
    </div>
  )
}

export default Custodial