import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render(){
    return (
      <div>
        <div className="header">
          <Link to='/' className="Home"> Home </Link>
          <Link to='/Strains' className="Strains">Strains </Link>
          <Link to='/Bored' className="bored">Bored</Link>
          <Link to='/Tacos' className="tacos">Tacos</Link>
          <Link to='/Quotes' className="quotes">Quotes</Link>
          <Link to='/Shibas' className="shibas">Shibas</Link>
          <Link to='/Youtube' className="youtube">Youtube</Link>
          <Link to='/Memes' className="memes">Memes</Link>
        </div>
      </div>
    )
  }
}

export default Navbar