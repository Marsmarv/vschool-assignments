import React from 'react'
import { Transition } from "react-transition-group";
import { TweenLite } from "gsap/all";
import { withVideo } from './GlobalProvider'
import Fade from 'react-reveal/Fade'

const startState = { autoAlpha: 0, y: -50 };


const Strains = (props) => <Transition
        unmountOnExit
        in={props.show}
        timeout={1000}
        onEnter={node => TweenLite.set(node, startState)}
        addEndListener={ (node, done) => {
          TweenLite.to(node, 0.5, {
            autoAlpha: props.show ? 1 : 0,
            y: props.show ? 0 : 50,
            onComplete: done
          });
        }}
        >

        <Fade><div className="strains container">
          <div className="btn">
            <button onClick={props.getStrains}>Get a strain</button>
          </div>
            {props.strain &&
              <h3 className="strain-content">
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
        </div></Fade>

        </Transition>;

export default withVideo(Strains)