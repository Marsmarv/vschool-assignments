import React, { Component } from 'react'
import './App.css'
import Axios from 'axios'

class App extends Component{
    constructor(){
        super()

        this.state = {
            name: "",
            image: '',
            hitlist: []
        }
    }

    componentDidMount(){
        Axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json').then((res)=> {
        this.setState({hitlist: res.data})
    })
    }


    render(){
        const mappedList = this.state.hitlist.map((list)=>{
            return  <div class="hello">
                        <h1>{list.name} </h1>
                        <img className="images" src={list.image} />
                    </div>
        })
        return(
                <div className="parent">
                    {mappedList}
                </div>
        )
    }




}

export default App