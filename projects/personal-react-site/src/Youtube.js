import React from 'react'
import {withVideo}from './GlobalProvider'
import Fade from 'react-reveal/Fade';

const Youtube = (props) => {
  return (
    <>
    <Fade>
      <div className="video container">
      <div className="btn">
        <button onClick={props.getVideos}>{!props.show ? "Get a video" : "Close video"}</button>
      </div>
      {props.videoIds !== '' && <Fade bottom when={props.show === true}><div><iframe src={`https://www.youtube.com/embed/${props.videoIds}?controls=1`} frameborder="0"></iframe></div></Fade>} <br/>
      </div>
    </Fade>
    </>
  )
}

export default withVideo(Youtube)