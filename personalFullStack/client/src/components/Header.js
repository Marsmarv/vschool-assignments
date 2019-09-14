import React from 'react'
import { withGlobalProvider } from "./GlobalProvider.js";


const Header = (props)=>{
  return(
    <>
      <div className="header">
        The <span>Met</span>ropolitan Museum of Art artwork search
      </div>
    </>
  )
}

export default withGlobalProvider(Header)