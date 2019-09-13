import React from 'react'
import Axios from 'axios'
import {withGlobalProvider} from './GlobalProvider'
const artAxios = Axios.create()


const Profile = (props) => {
  return(
    <div className="result-container">
      {props.likedArt.map(piece => {
        return <div className="photo-container">
          { piece.title && <h1 className="display"><span className="span">Title:</span> {piece.title}</h1>}
          { piece.culture && <h1 className="display"><span className="span">Culture:</span> {piece.culture}</h1>}
          { piece.department && <h1 className="display"><span className="span">Department:</span> {piece.department}</h1>}
          { piece.medium && <h1 className="display"><span className="span">Medium:</span> {piece.medium}</h1>}
          { piece.period && <h1 className="display"><span className="span">Period:</span> {piece.period}</h1>}
          { piece.creditLine && <h1 className="display"><span className="span">Credit line:</span> {piece.creditLine}</h1>}
          <img className="display-image" src={piece.primaryImage} alt=""/>
          <button className="liked-button"
            onClick={() => console.log("jebba debba")}>
            un-favorite
          </button>
        </div>
      })}
    </div>
  )
}

export default withGlobalProvider(Profile)