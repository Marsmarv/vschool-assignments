import React from 'react'
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import {withVideo}from './GlobalProvider'
import Fade from 'react-reveal/Fade';

const startState = { autoAlpha: 0, y: -50 };

const Bored = (props) => <Transition
    unmountOnExit
    in={props.show}
    timeout={1000}
    onEnter={node => TweenMax.set(node, startState)}
    addEndListener={ (node, done) => {
      TweenMax.to(node, 0.5, {
        autoAlpha: props.show ? 1 : 0,
        y: props.show ? 0 : 50,
        onComplete: done
      });
    }}
    >
    <Fade><div className="bored container">
      <div className="btn">
        <button onClick={props.getActivity}>Bored? Get an activity</button>
      </div>
      {props.bored &&
        <div className='textbored-one'><h3 className="textbored" ><u>Here's something to do:</u> {props.bored}</h3></div>
      }
      </div></Fade>
    </Transition>


export default withVideo(Bored)