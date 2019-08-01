import React, { Component } from 'react'
import Axios from 'axios'
const artAxios = Axios.create()
const { Consumer, Provider } = React.createContext()

artAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

class GlobalProvider extends React.Component {
  constructor(){
    super()

    this.state = {
      artIds: [],
      userData: {},
      user: JSON.parse(localStorage.getItem('user')) || {},
      token: localStorage.getItem('token') || ''
    }
  }

  getArtIds = (search) => {
    Axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search}`).then( res => {
      this.setState({artIds: res.data})
    })
  }

  getUserData = () => {
    artAxios.get('/api/art').then( response => {
      console.log( response.data )
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
      console.log(res.data)
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      this.setState({
        user,
        token
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
        token
      });
      // console.log(res.data)
      this.getUserData()
      return res
    })
  }

  logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    this.setState({ user: {}, token: "" })
  }

  render() {
    return (
      <Provider value={{
        ...this.state,
        getArtIds: this.getArtIds,
        getUserData: this.getUserData,
        userSignUp: this.userSignUp,
        userLogin: this.userLogin,
        logout: this.logout
      }} >{this.props.children}
      </Provider>
    )
  }
}

export default GlobalProvider

// export function withGlobalProvider(Comp){
//   return props => <Consumer>
//                     {value => <Comp {...props}{...value} />}
//                   </Consumer>
// }

export const withGlobalProvider = C => props => (
  <Consumer>
  { value => < C {...props} {...value} /> }
  </Consumer>
)