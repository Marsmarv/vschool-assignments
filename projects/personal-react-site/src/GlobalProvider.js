import React, { Component } from 'react';
import Axios from 'axios'
const {Consumer, Provider} = React.createContext()

class GlobalProvider extends Component {
  constructor(){
    super()
    this.state = {
      videoIds: '',
      bored: ''
    }
  }

  getVideos = () => {
    Axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLUDL-u2Cvt5pCwFbWkzZpdAz2HgqfMPo5&key=AIzaSyCGcY7LBk-dRKVn6REkTxUdGon1VBeDdB0').then(res => {
      this.setState({ videoIds: res.data.items[Math.floor(Math.random() * res.data.items.length)].snippet.resourceId.videoId })
      console.log(res.data.items)})
  }

  getActivity = () => {
    Axios.get('https://www.boredapi.com/api/activity').then(res => {
      this.setState({ bored: res.data.activity })
    })
  }

  render() {
    return (
      <Provider 
        value={{
          ...this.state,
          getVideos: this.getVideos,
          getActivity: this.getActivity
        }} >
          { this.props.children }
      </Provider>
    )
  }
}

export default GlobalProvider
export const withVideo = C => props => (
  <Consumer>
    { value => <C {...value} {...props}/>}
  </Consumer>
)