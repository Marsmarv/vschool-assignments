import React from 'react'
import { Link } from "react-router-dom";
import {withGlobalProvider} from './GlobalProvider'

const Main = ()=>{
  return(
    <>
    <div className="main">
      <div className="main-container">
        <Link to='/' className='home-button'>HOME</Link>
        <Link to='/login' className='info-button'>Login</Link>
        <Link to='/art' className='info-button'>art</Link>
        <Link to='/profile' className='info-button'>profile</Link>
      </div>
    </div>
    </>
  )
}

export default withGlobalProvider(Main)