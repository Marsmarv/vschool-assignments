import React from 'react'
import { Link } from "react-router-dom";
import {withGlobalProvider} from './GlobalProvider'

const Main = ()=>{
  return(
    <>
    <div className="main">
      <div className="main-container">
        <div className="link-container">
          <Link to='/login' className='nav-button'> Login Page </Link>
          <Link to='/art' className='nav-button'> Art </Link>
          <Link to='/profile' className='nav-button'> Profile Page </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default withGlobalProvider(Main)