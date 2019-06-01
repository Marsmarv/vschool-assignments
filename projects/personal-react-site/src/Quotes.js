import React from 'react';
import {withVideo}from './GlobalProvider'

const Quotes = (props)=>{
  return(
    <>
      <div>
        {props.quotes &&
        <>
          <h3>author: {props.quotes[0].title} <br/>
              quote: {props.quotes[0].content}
          </h3>
        </>
        }
      </div>
      <button onClick={props.getQuotes}>click</button>
    </>
  )
}

export default withVideo(Quotes)