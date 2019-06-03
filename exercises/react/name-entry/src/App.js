import React, {Component} from 'react'
import Name from './Name'

class App extends Component {
    constructor(){
        super()
        this.state = {
            sentence: "",
            listItems: []
        }
    }

    handleChange = (e) => {
        const {value} = e.target
        this.setState(() => ({sentence: value}))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState((prevState) => {
            return {
                listItems: [...prevState.listItems, prevState.sentence],
                sentence: ""
            }  
        })
    }


    render() {
        const oList = this.state.listItems.map((item, i)=>{
            return <li key={i + item}> {item} </li>
        })
        const {handleChange, handleSubmit, state} = this
        const {sentence} = state

        return (
            <>
            <Name handleSubmit = {handleSubmit} handleChange = {handleChange} value={sentence} />
            <h1>{sentence}</h1>
            <ol>{oList}</ol>
            </>
        )
    }
}

export default App