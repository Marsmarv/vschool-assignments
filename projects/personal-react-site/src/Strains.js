import React from 'react'
import { withVideo } from './GlobalProvider'

const Strains = (props) => {
  return (
    <>
      <div className="strains container">
      <div className="btn">
        <button onClick={props.getStrains}>Get a strain</button>
      </div>
        {props.strain &&
          <h3>
          <div className="text"> <u>Name:</u> {props.strain} </div> <br/>
          <div><u> Effects </u> </div>
          <div className="text">medical: {props.strainI.effects && props.strainI.effects.medical.map( effect => (<>{effect + ", "}</>) )} </div>
          <div className="text">positive: {props.strainI.effects && props.strainI.effects.positive.map( effect => (<>{effect + ", "}</>) )} </div>
          <div className="text">negative: {props.strainI.effects && props.strainI.effects.negative.map( effect => (<>{effect + ", "}</>) )} </div> <br/>
          <div className="text"><u>Flavors:</u> {props.strainI.flavors && props.strainI.flavors.map( effect => (<>{effect + ", "}</>) )} </div> <br/>
          <div className="text"><u>Race:</u> {props.strainI.race}</div> <br/>
          <div className='text'><u>Description:</u> {props.description}</div>
          </h3>
        }

      </div>

    
    </>
  )
}

export default withVideo(Strains)