import React from 'react';
import {withVideo}from './GlobalProvider'

const Youtube = (props) => {
  console.log(props.videoIds)
  return (
    <div className="video container">
    {props.videoIds !== '' &&
    <div>
      <iframe src={`https://www.youtube.com/embed/${props.videoIds}?controls=1`} frameborder="0"></iframe>
    </div> 
    }
    <br/>
    <button onClick={props.getVideos}>Get video</button>
    </div>
  )
}

export default withVideo(Youtube)
