import React from 'react'
import { withVideo } from './GlobalProvider'
import Fade from 'react-reveal/Fade';

const Memes = (props) => {
  return (
    <>
    <Fade>
      <div className="memes container">
      <div className="btn">
        <button onClick={props.getMemes}>Get a meme</button>
      </div>
        <div>{props.memes !== '' && <img className="memegrow" src={props.memes} />}</div>
      </div>
    </Fade>
    </>
  )
}

export default withVideo(Memes)