import React from 'react'
import Component from './Component'

const colorInfo = [
    {
        title: 1,
        subtitle: "numbers",
        information: "This color is green",
        background: 'green'
    },{
        title: 2,
        subtitle: "numbers",
        information: "This color is red",
        background: 'red'
    },{
        title: 3,
        subtitle: "numbers",
        information: "This color is blue",
        background: 'blue'
    },{
        title: 4,
        subtitle: "numbers",
        information: "This color is yellow",
        background: 'yellow'
    },{
        title: 5,
        subtitle: "numbers",
        information: "This color is gray",
        background: 'gray'
    },{
        title: 6,
        subtitle: "numbers",
        information: "This color is orange",
        background: 'orange'
    },{
        title: 7,
        subtitle: "numbers",
        information: "This color is pink",
        background: 'pink'
    }
]

const Main = ()=>{
    const mappedColors = colorInfo.map((color)=>{
        return<Component color={color} />
    })
    return (
        <div className="colorContainer">
            {mappedColors}
        </div>
    )
}

export default Main