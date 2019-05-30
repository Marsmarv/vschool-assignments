import React from 'react'
import { withToggler } from './Toggler'

const Menu = (props) => {
    return (
        <div>{props.on ? <button onClick={props.toggle}>I'm On</button> 
        : <button onClick={props.toggle}>I'm Off</button> }</div>
    )
}

export default withToggler(Menu)