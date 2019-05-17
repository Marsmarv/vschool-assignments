import React from 'react'

class App extends React.Component {
    constructor(){
       super()

       this.state = {
           number: 0
       }

       this.subtract = this.subtract.bind(this)
    }

    add = () => {
        this.setState((prevState) => {
            return {
                number: prevState.number + 1
            }
        })

        // Use only when you don't need the previous values stored in state
        // this.setState({number: 30})
    }

    subtract(){
       
        this.setState((prevState)=> {
            return {
                number: prevState.number - 1
            }
        })
    }


    render(){
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.add} >+</button>
            </div>
        )
    }
}

export default App



