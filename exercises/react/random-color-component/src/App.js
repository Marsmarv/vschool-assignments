import React, { Component } from 'react';
import Colorbox from './Colorbox'
import './App.css'
import Axios from 'axios'

class App extends Component{
    constructor(){
        super()

        this.state = {
            color: ""
        }
    }

    componentDidMount(){
        Axios.get('http://www.colr.org/json/tags/cheese,wine').then((res)=>{
            this.setState({color: res.data.colors[Math.floor(Math.random()*163)].hex}) 
        })
    }


    render(){
        return(
            <>
            <Colorbox color={this.state.color}/>
            </>
        )
    }
}

export default App