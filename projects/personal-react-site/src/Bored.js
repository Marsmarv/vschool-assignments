import React from 'react'
import {withVideo}from './GlobalProvider'

const Bored = (props) => {
  return (
    <div className="bored container">
    <h3>{props.bored}</h3>
    <button onClick={props.getActivity}>Bored?</button>
    </div>
  )
}

export default withVideo(Bored)