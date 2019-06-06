import React, { Component } from 'react';
import Axios from 'axios'
const {Consumer, Provider} = React.createContext()

class GlobalProvider extends Component {
  constructor(){
    super()
    this.state = {
      videoIds: '',
      bored: '',
      taco: {},
      quotes: '',
      shiba: [],
      strains: [],
      strainNames: [],
      strain:'',
      description:'',
      strainI:{},
      memes:[],
      thumb: false,
      show: false

    }
  }


  toggleThumb = () => {
    this.setState(({thumb}) => ({thumb: !thumb}))
  }

  getVideos = () => {
    const pageTokens = ['CDIQAA','CGQQAA', 'CJYBEAA', 'CMgBEAA','CPoBEAA','CKwCEAA']
    const rand = Math.floor(Math.random() * pageTokens.length)
    
    Axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&pageToken=${pageTokens[rand]}&playlistId=PLUDL-u2Cvt5pCwFbWkzZpdAz2HgqfMPo5&key=AIzaSyCGcY7LBk-dRKVn6REkTxUdGon1VBeDdB0`).then(res => {
      this.setState({ videoIds: res.data.items[Math.floor(Math.random() * res.data.items.length)].snippet.resourceId.videoId 
      , show: !this.state.show})
    })
  }

  getActivity = () => {
    Axios.get('https://www.boredapi.com/api/activity').then(res => {
      this.setState({ bored: res.data.activity })
    })
  }

  getTacos = () => {
    Axios.get('http://taco-randomizer.herokuapp.com/random/').then(res=>{
      this.setState({taco: res.data })
    })
  }

  getQuotes = () => {
    Axios.get('https://vschool-cors.herokuapp.com?url=http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1').then(res=>{
    const quote = res.data[0].content.replace(/(<([^>]+)>)/ig, '')
    res.data[0].content = quote
    this.setState({quotes: res.data })
    })
  }

  getShibas = () => {
    Axios.get('https://vschool-cors.herokuapp.com?url=http://shibe.online/api/shibes?count=100&urls=true&httpsUrls=true').then(res=>{
      this.setState({shiba: res.data})
    })
  }

  getStrains = () => {
    Axios.get('http://strainapi.evanbusse.com/12QjmLI/strains/search/all').then(res=>{
      this.setState({
        strainNames: Object.keys(res.data),
        strains: res.data
      })
      const randomStrain = this.state.strainNames[Math.floor(Math.random()*this.state.strainNames.length)]
      const strainObj = this.state.strains[randomStrain]
      this.displayRandomStrain(randomStrain, strainObj)
    })
  }

  displayRandomStrain = (name, strainInfo) => {
    Axios.get(`http://strainapi.evanbusse.com/12QjmLI/strains/data/desc/${strainInfo.id}`).then((response) => {
      this.setState({
        description: response.data.desc,
        strain: name,
        strainI: strainInfo
      })
    })  
  }

  getMemes = () => {
    Axios.get('https://api.memeload.us/v1/random').then(res=> {
      this.setState({memes: res.data.image}) 
    })
  }

  render() {
    return (
      <Provider 
        value={{
          ...this.state,
          getVideos: this.getVideos,
          getActivity: this.getActivity,
          getTacos: this.getTacos,
          getQuotes: this.getQuotes,
          getShibas: this.getShibas,
          getStrains: this.getStrains,
          getMemes: this.getMemes,
          toggleThumb: this.toggleThumb
        }}>
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