import React from 'react'

const Colorbox = (props)=>{
    console.log(props)
    return(
        <div className="back" style={{background: `#${props.color}`}}></div>
    )
}

export default Colorbox 