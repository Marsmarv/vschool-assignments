import React from 'react'

const Spots = (props) => {
    let {place, price, timeToGo, background, expense} = props.spot;  
    return (
        <div className="spot-container" style={{background}}>
            <h2>Place: {place}</h2>
            <h3>Price: ${price}</h3>
            <p>Best time to go: {timeToGo}</p>
            <p>Expense: {expense}</p>
            <br/>
        </div>
    )
}

export default Spots