import React, { useEffect , useState } from 'react'
import { withGlobalProvider} from './GlobalProvider'
import Axios from "axios"
const artAxios = Axios.create()

artAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

const Profile = (props) => {
  const { likedArt , likedArtID , unFavoriteArt } = props
  let [users, setUsers] = useState([])
  useEffect(() => {
    artAxios
      .get("/api/art/")
      .then(res => setUsers(res.data))
      
  }, [])

  return(
    <div className="profile-container">
      <div className="profile">
        { likedArtID.length === 0 ? <h1 className='art-notification'> no art liked yet </h1> : null }
        <div className="fav-container">
          {likedArt.map( piece => {
            const { title , culture , department , medium , period , creditLine , primaryImage, objectID, _id } = piece
            return <div className="photo-container pp">
              <button className="liked-button"
                onClick={ () => unFavoriteArt(piece) }>
                unlike
              </button>
              { title && <h1 className="display"><span className="span">Title:</span> {title}</h1>}
              { culture && <h1 className="display"><span className="span">Culture:</span> {culture}</h1>}
              { department && <h1 className="display"><span className="span">Department:</span> {department}</h1>}
              { medium && <h1 className="display"><span className="span">Medium:</span> {medium}</h1>}
              { period && <h1 className="display"><span className="span">Period:</span> {period}</h1>}
              { creditLine && <h1 className="display"><span className="span">Credit line:</span> {creditLine}</h1>}
              <img className="display-image" src={primaryImage} alt=""/>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default withGlobalProvider(Profile)