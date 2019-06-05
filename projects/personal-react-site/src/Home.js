import React from 'react'
import {withVideo} from './GlobalProvider'

const Home = (props)=>{
  return (
    <>
    <div onClick={props.toggleThumb} className="thumbBox" >
      <img id={props.thumb ? 'tiny-thumb' : 'thumbs'} src='https://i.ya-webdesign.com/images/hand-knuckles-png-16.png'/>
    </div>
    <div onClick={props.toggleThumb} className="passBox" >
      <img id={props.thumb ? 'tiny-thumb' : 'thumbs'} src='http://www.stickpng.com/assets/images/580b585b2edbce24c47b29aa.png'/>
    </div>
    </>
    
  )
}


export default withVideo(Home)

