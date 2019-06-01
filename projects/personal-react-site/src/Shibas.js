import React from 'react'
import {withVideo}from './GlobalProvider'

const Shibas = (props) => {

  return (
    <>
      <button onClick={props.getShibas}>click</button>
      <div>
        {props.shiba !== '' && props.shiba.map(s => <img src={s} height='125' width='125' />)}
      </div> 
    </>
  )
}

export default withVideo(Shibas)