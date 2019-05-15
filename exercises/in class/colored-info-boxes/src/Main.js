import React from 'react'
import Component from './Component'

const colorInfo = [
    {
        number: 1,
        background: 'green'
    },{
        number: 2,
        background: 'blue'
    },{
        number: 3,
        background: 'red'
    },{
        number: 4,
        background: 'yellow'
    },{
        number: 5,
        background: 'gray'
    },{
        number: 6,
        background: 'black'
    }
]

const Main = ()=>{
    const mappedColors = colorInfo.map((color)=>{
        return<Component number={color.number} background={color.background} />
    })
    return (
        <div className="colorContainer">
            {mappedColors}
        </div>
    )
}

export default Main