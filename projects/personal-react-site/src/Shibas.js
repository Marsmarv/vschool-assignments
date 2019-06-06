import React from 'react'
import {withVideo}from './GlobalProvider'
import Fade from 'react-reveal/Fade';

const Shibas = (props) => {
  return (
    <>
      <Fade>
        <div className="shibas container">
        <div className="btn">
          <button onClick={props.getShibas}>Pictures of shiba inu</button>
        </div>
        <div> {props.shiba !== '' && props.shiba.map(s => <img className="shib" src={s} />)} </div> 
      </div>
    </Fade>
    </>
  )
}

export default withVideo(Shibas)