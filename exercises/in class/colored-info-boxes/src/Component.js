import React from 'react'

const Component = (props) => {
    return (
        <>
        <div>Background: {props.background}</div>
        <div>Title: {props.title}</div>
        <div>Subtitle: {props.subtitle}</div>
        <div>Information: {props.information}</div>
        </>
    )
}

export default Component