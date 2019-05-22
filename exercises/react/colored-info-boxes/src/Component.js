import React from 'react'

const Component = (props) => {

    let {background, title, subtitle, information} = props.color
    
    return (
       <div style={{background}}>
           <h1>Title: {title}</h1>
           <p>Subtitle: {subtitle}</p>
           <p>information: {information}</p>
       </div>
    )
}

export default Component