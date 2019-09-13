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
            return <div className="photo-container">
              { art.title && <h1 className="display"><span className="span">Title:</span> {art.title}</h1>}
              { art.culture && <h1 className="display"><span className="span">Culture:</span> {art.culture}</h1>}
              { art.department && <h1 className="display"><span className="span">Department:</span> {art.department}</h1>}
              { art.medium && <h1 className="display"><span className="span">Medium:</span> {art.medium}</h1>}
              { art.period && <h1 className="display"><span className="span">Period:</span> {art.period}</h1>}
              { art.creditLine && <h1 className="display"><span className="span">Credit line:</span> {art.creditLine}</h1>}
              <img className="display-image" src={art.primaryImage} alt=""/><br/>
              <div className="button-container">
                <button className={props.likedArtID.includes(art.objectID) ? "liked-button-two" : "liked-button"} 
                  onClick={() => favoritedArt(art)}>
                  {props.likedArtID.includes(art.objectID) ? "liked" : "like"}
                </button>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default withGlobalProvider(Art)