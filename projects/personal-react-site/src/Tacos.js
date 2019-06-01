import React from 'react'
import {withVideo}from './GlobalProvider'

const Tacos = (props) => {
  const {base_layer, shell, mixin, condiment, seasoning} = props.taco
  return (
    <>
    <div>
      {props.taco.base_layer && 
        <>  
          <h2>Make a taco</h2>
          <h3>Base Layer: {base_layer.name} <br/>
              Shell: {shell.name} <br/>
              Mixin: {mixin.name} <br/>
              Condiment: {condiment.name} <br/>
              Seasoning: {seasoning.name}</h3>
        </>
      }
    </div>
    <button onClick={props.getTacos}>click</button>
    </>
  )
}

export default withVideo(Tacos)