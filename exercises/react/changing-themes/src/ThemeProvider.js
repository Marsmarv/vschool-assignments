import React, { Component, createContext } from 'react'
const { Consumer, Provider } = createContext()

class ThemeProvider extends Component {
    constructor(){
        super()
        this.state = {
            lightTheme: true
        }
    }

    toggle = ()=>{
        this.setState(prevState => {
            return { lightTheme: !prevState.lightTheme}
        })
    }

    render(){
        const values = {
            ...this.state,
            toggle:this.toggle
        }

        return (
            <Provider value ={values}>
                {this.props.children}
            </Provider>
        )
    }
}

export default ThemeProvider;

export const withThemeProvider =  C => props => (
    <Consumer>
        {value => <C {...value}{...props}/>}
    </Consumer>
)