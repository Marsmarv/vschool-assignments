import React from 'react'
import {withVideo}from './GlobalProvider'

const Youtube = (props) => {
  return (
    <>
      <div className="video container">
      <div className="btn">
        <button onClick={props.getVideos}>Get a video</button>
      </div>
      {props.videoIds !== '' && <div><iframe src={`https://www.youtube.com/embed/${props.videoIds}?controls=1`} frameborder="0"></iframe></div>} <br/>
      </div>
    </>
  )
}

export default withVideo(Youtube)