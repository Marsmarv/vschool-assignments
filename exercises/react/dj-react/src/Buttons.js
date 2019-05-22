import React from 'react'

const Buttons = (jenga)=>{
    let [color, colorHalf, bright, bleft, topLeft, topRight, bottomLeft, bottomRight] = jenga.buttons
    return (
        <>
            <button onClick={color}>Black/White</button>
            <button onClick={colorHalf}>Top purple</button>
            <button onClick={bleft}>Blue left</button>
            <button onClick={bright}>Blue right</button>
            <button onClick={topLeft}>Top left random</button>
            <button onClick={topRight}>Top right random</button>
            <button onClick={bottomLeft}>Bottom left random</button>
            <button onClick={bottomRight}>Bottom right random</button>
            {console.log(Buttons)}
        </>
    )
}

export default Buttons