import React from 'react'
import {withVideo}from './GlobalProvider'

const Bored = (props) => {
  return (
    <>
      <div className="bored container">
      <div className="btn">
        <button onClick={props.getActivity}>Bored? Get an activity</button>
      </div>
      {props.bored &&
        <div className='textbored'><h3><u>Here's something to do:</u> {props.bored}</h3></div>
      }
      </div>

    </>
  )
}

export default withVideo(Bored)