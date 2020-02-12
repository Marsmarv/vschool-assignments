import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="staff">
      <Link to="/Custodial" className="custodial"> Custodial </Link>
      <div></div>
      <Link to="/Teacher" className="teacher"> Teacher </Link>
    </div>
  )
}

export default Home