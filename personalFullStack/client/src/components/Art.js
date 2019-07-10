import React from 'react';
import { Link } from "react-router-dom";

const Art = (props) => {
  return(
    <>
    <div className="main-container art-background">
      <div className="art-container">
        <Link to='/' className='home-button'>HOME</Link>
      </div>
    </div>



    </>
  )
}

export default Art