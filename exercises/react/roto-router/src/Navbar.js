import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='header'>
            <Link to='/about' className='nav'>About</Link>
            <Link to='/' className='nav'>Home</Link>
            <Link to='/services' className='nav'>Services</Link>
        </div>
    )
}

export default Navbar