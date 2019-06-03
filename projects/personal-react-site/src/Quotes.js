import React from 'react'
import {withVideo}from './GlobalProvider'

const Quotes = (props)=>{
  return(
    <>
      <div className="quotes container">
      <div className="btn">
        <button onClick={props.getQuotes}>Generate a quote</button>
      </div>
        {props.quotes &&
        <>
          <h3><u>author:</u> {props.quotes[0].title} <br/>
              <u>quote:</u> {props.quotes[0].content}
          </h3>
        </>
        }
      </div>
    </>
  )
}

export default withVideo(Quotes)