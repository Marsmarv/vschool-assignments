import React from 'react'

const Component = (props) => {
    const styles = {
        backgroundColor: props.background
    }
    
    return (
       <div style={styles}>
           <h1>color box</h1>
           <p>this is the number {props.number}</p>
       </div>
    )
}

export default Component