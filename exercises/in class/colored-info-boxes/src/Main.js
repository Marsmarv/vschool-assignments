import React from 'react'
import Component from './Component'

const Main = ()=>{
    const myComponent = [{
        background: 'black',
        title: 'first component',
        subtitle: 'sub',
        information: 'empty'
    },{
    background: 'blue',
    title: 'second component',
    subtitle: 'another sub',
    information: 'empty'
    }
]

    return (
        <div className="main-container">
            <Component background={myComponent.background}
                        title={myComponent.title}
                        subtitle={myComponent.subtitle}
                        information={myComponent.information}/>
        </div>
    )
}

export default Main