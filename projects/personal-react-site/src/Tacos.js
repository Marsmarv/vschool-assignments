import React from 'react'
import {withVideo}from './GlobalProvider'

const Tacos = (props) => {
  const {base_layer, shell, mixin, condiment, seasoning} = props.taco
  return (
    <div className="tacos container">
    <div className="btn">
      <button onClick={props.getTacos}>Get ingredients for a taco</button>
    </div>
      {props.taco.base_layer && 
        <>  
          
          <h3 className='tacotext'>
          <h2>Make a taco</h2>
              <u>Base Layer:</u> {base_layer.name} <br/>
              <u>Shell:</u> {shell.name} <br/>
              <u>Mixin:</u> {mixin.name} <br/>
              <u>Condiment:</u> {condiment.name} <br/>
              <u>Seasoning:</u> {seasoning.name}</h3>
        </>
      }
    </div>
  )
}

export default withVideo(Tacos)