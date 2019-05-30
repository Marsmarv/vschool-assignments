import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="header">
      <Link to='/' className="youtube">Youtube </Link>
      <Link to='Bored' className="bored">Bored</Link>
    </div>
  )
}


export default Navbar