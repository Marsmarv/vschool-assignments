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
    const { search, artIds } = this.state
    Axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search}`).then( res => {
      this.setState({artIds: res.data.objectIDs})
      if(artIds === null && search !== "") {
        alert('no search results')
      } else if (artIds === null && search === ""){
        alert('type something in the search bar')
      } else if (artIds.length > 100){
        artIds.splice(100, artIds.length)
      }
    })
    .then( () => {
      const { artIds } = this.state
      artIds && artIds.map( (id, i) => {
        if(i < 21){
          Axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`).then( res => {
            const { culture, department, medium, period, primaryImage, title, creditLine, objectID } = res.data
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
          })
        }
      }) 
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
    const { getUserData } = this
    return Axios.post("/auth/login", userInfo).then(res => {
      const { user, token } = res.data
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      this.setState({
        user,
        token,
        authErrMsg: ""
      });
      getUserData()
      return res
    })
  }

  componentDidMount(){
    // const { getUserData } = this
    // getUserData()
    artAxios.get("/api/art/").then(res => {
      // console.log(res.data)
      // const artPieces = res.data.map( artPiece => artPiece.objectID)
      this.setState({likedArt: res.data})
    })
  }
  

  favoritedArt = (favoritedArt) => {
    const { likedArt } = this.state
    const { objectID, title, primaryImage, culture, department, medium, period, creditLine } = favoritedArt
    this.setState(prevState => {return {likedArt: [...prevState.likedArt, objectID]}})
    likedArt.includes(objectID) === true ?
    alert('this is already liked') :
    artAxios.post("/api/art/", { 
      title,
      primaryImage,
      culture,
      department,
      medium,
      period,
      creditLine,
      objectID 
    })
  }

  logout = e => {
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