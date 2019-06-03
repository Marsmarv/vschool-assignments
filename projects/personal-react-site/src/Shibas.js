import React from 'react'
import {withVideo}from './GlobalProvider'

const Shibas = (props) => {
  return (
    <>
        <div className="shibas container">
        <div className="btn">
          <button onClick={props.getShibas}>Pictures of shiba inu</button>
        </div>
        <div> {props.shiba !== '' && props.shiba.map(s => <img className="shib" src={s} />)} </div> 
      </div>
    </>
  )
}

export default withVideo(Shibas)