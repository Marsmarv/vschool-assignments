import React from 'react';
import { Link } from "react-router-dom";
import { withGlobalProvider } from './GlobalProvider'

const Art = (props) => {
const { handleChange, handleSubmit, favoritedArt } = props
  return(
      <div className="main-container art-background">
        <div className="art-container">

          <div className="search-form">
            <h3 className="search-bar">Art search</h3> 
            <form onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange} name="search" placeholder="Search" />
              <div className="submit"><button>Submit</button></div> 
            </form>
          </div>
          <div className="result-container">
            {props.searchedArt.map( art => {
              return <div>
                { art.title && <h1 className="display">Title: {art.title}</h1>}
                { art.culture && <h1 className="display">Culture: {art.culture}</h1>}
                { art.department && <h1 className="display">Department: {art.department}</h1>}
                { art.medium && <h1 className="display">Medium: {art.medium}</h1>}
                { art.period && <h1 className="display">Period: {art.period}</h1>}
                { art.creditLine && <h1 className="display">Credit line: {art.creditLine}</h1>}
                <img className="display-image" src={art.primaryImage} alt=""/><br/>
                <div><button onClick={favoritedArt}>like</button> <button>save</button></div>
              </div>
            })}
          </div>
        </div>

      </div>
  )
}

export default withGlobalProvider(Art)