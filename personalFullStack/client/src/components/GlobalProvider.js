import React, { Component } from 'react'
import Axios from 'axios'
const artAxios = Axios.create()
const { Consumer, Provider } = React.createContext()

artAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

class GlobalProvider extends Component {
  constructor(){
    super()

    this.state = {
      search: "",
      artIds: [],
      searchedArt: [],
      userData: {},
      user: JSON.parse(localStorage.getItem('user')) || {},
      token: localStorage.getItem('token') || '',
      authErrMsg: "",
      username: "",
      password: "",
      likedArt:[]
    }
  }

  handleChange = e => {
    const { name, value } = e.target
        this.setState({[name]: value});
  }

  handleSubmit = e => {
    e.preventDefault()
    const { search } = this.state
    Axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search}`).then( res => {
      this.setState({artIds: res.data.objectIDs})
      if(this.state.artIds === null && this.state.search !== "") {
        alert('no search results')
      } else if (this.state.artIds === null && this.state.search === ""){
        alert('type something in the search bar')
      } else if (this.state.artIds.length > 100){
        this.state.artIds.splice(100, this.state.artIds.length)
      }
    })
    .then( () => {
      this.state.artIds ? this.state.artIds.map( (id, i) => {
        if(i < 21){
          Axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`).then(res => {
            const { culture, department, medium, period, primaryImage, title, creditLine, objectID } = res.data
            console.log(res.data)
            const artObj = {
              title,
              primaryImage,
              culture,
              department,
              medium,
              period,
              creditLine,
              objectID
            }
            this.setState( prevState => {return { searchedArt: [...prevState.searchedArt, artObj] }})
            console.log(this.state.searchedArt)
          })
        }
      }) : console.log('fuck')
    })
    this.setState({searchedArt: []})
  }

  getUserData = () => {
    artAxios.get('/api/art').then( response => {
      this.setState({
        userData: response.data,
        artIds: response.data[0].artIds
      })
      console.log(`artIds: ${this.state.userData[0].artIds}`)
    })
  }

  userSignUp = (userInfo) => {
    return Axios.post("/auth/signup", userInfo).then(res => {
      const { user, token } = res.data
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      this.setState({
        user,
        token,
        authErrMsg: ""
      });
      return res
    })
  }

  userLogin = (userInfo) => {
    return Axios.post("/auth/login", userInfo).then(res => {
      const { user, token } = res.data
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      this.setState({
        user,
        token,
        authErrMsg: ""
      });
      this.getUserData()
      return res
    })
  }

  favoritedArt = (favoritedArtID) => {
    console.log(favoritedArtID)
//Take the art piece and add it to your favorites (.../api/art/)
//create the artPiece object and send it
//{favoritedArtID: 837238483}

//Add the art piece to your liked art in state
  artAxios.post("/api/art/", { favoritedArtID }).then(console.log('successfully added to liked Art'))
  //don't forget to add the user auth token to the request
  //artAxios is diff from just Axios because it has the interceptor
  this.setState({likedArt = favoritedArtID})
  console.log(this.likedArt)

    // return Axios.post("/like/:objectID", (req, res) => {
    //   const artPieces = req.body.art
    //   const foundArt = artPieces.find(art => art.objectID === req.params.objectID)
    //   const updatedObj = req.body
    //   const updatedArt = Object.assign(foundArt, updatedObj)
    //   const updatedDB = artPieces.map(art => art.objectID == req.params.objectID ? updatedArt : art)
    //   artPieces = updatedDB
    //   res.send(updatedArt)
    // })
  }

  logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    this.setState({ user: {}, token: "", authErrMsg: "" })
  }

  render() {
    return (
      <Provider value={{
        ...this.state,
        getUserData: this.getUserData,
        userSignUp: this.userSignUp,
        userLogin: this.userLogin,
        logout: this.logout,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit,
        favoritedArt: this.favoritedArt
      }} >{this.props.children}
      </Provider>
    )
  }
}

export default GlobalProvider

export const withGlobalProvider = C => props => (
  <Consumer>
  { value => < C {...props} {...value} /> }
  </Consumer>
)