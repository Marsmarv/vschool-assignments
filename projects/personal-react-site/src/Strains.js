import React from 'react'
import { withVideo } from './GlobalProvider'

const Strains = (props) => {
  return (
    <>
      <div>
        <h3>
        <div> <u>Name:</u> {props.strain} </div> <br/>
        <div><u> Effects </u> </div>
        <div>medical: {props.strainI.effects && props.strainI.effects.medical.map( effect => (<>{effect + ", "}</>) )} </div>
        <div>positive: {props.strainI.effects && props.strainI.effects.positive.map( effect => (<>{effect + ", "}</>) )} </div>
        <div>negative: {props.strainI.effects && props.strainI.effects.negative.map( effect => (<>{effect + ", "}</>) )} </div> <br/>
        <div><u>Flavors:</u> {props.strainI.flavors && props.strainI.flavors.map( effect => (<>{effect + ", "}</>) )} </div> <br/>
        <div><u>Race:</u> {props.strainI.race}</div> <br/>
        <u>Description:</u> {props.description}
        </h3>
      </div>
      <button onClick={props.getStrains}>click</button>
    </>
  )
}

export default withVideo(Strains)