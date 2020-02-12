import React from 'react';
import Daily from './Daily'
import Desk from './Desk'
import Room from './Room'

const Custodial = () => {
  return (
    <div className="custodial-container">
      <Room />
      <Desk />
      <Daily />
    </div>
  )
}

export default Custodial