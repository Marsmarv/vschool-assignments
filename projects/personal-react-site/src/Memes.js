import React from 'react'
import { withVideo } from './GlobalProvider'

const Memes = (props) => {
  return (
    <>

      <div className="memes container">
      <div className="btn">
        <button onClick={props.getMemes}>Get a meme</button>
      </div>
        <div>{props.memes !== '' && <img className="memegrow" src={props.memes} />}</div>
      </div>
    </>
  )
}

export default withVideo(Memes)