import React from 'react'
import { withVideo } from './GlobalProvider'

const Memes = (props) => {
  return (
    <>
    <button onClick={props.getMemes}>click</button>
    <div>{props.memes !== '' && <img src={props.memes} />}</div>
    </>
  )
}

export default withVideo(Memes)