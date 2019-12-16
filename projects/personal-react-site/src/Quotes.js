import React from 'react'
import {withVideo}from './GlobalProvider'
import Fade from 'react-reveal/Fade';

const Quotes = (props)=>{
  return(
    <>
    <Fade>
      <div className="quotes container">
      <div className="btn">
        <button onClick={props.getQuotes}>Generate a quote</button>
      </div>
        {props.quotes &&
        <>
          <h3 className="quote-text"><u>author:</u> {props.quotes.author} <br/><br/>
              <u>quote:</u> {props.quotes.content}
          </h3>
        </>
        }
      </div>
    </Fade>
    </>
  )
}

export default withVideo(Quotes)