import React from 'react'
import "./styles.css"
import Squares from './Squares'
import Buttons from './Buttons'

class App extends React.Component {
    constructor(){
        super()

        this.state = {
            colors: ["White", "White", "White", "White"]
        }
    }

    color = ()=>{
        this.state.colors[0] === "White" 
        ? this.setState({colors: ['black', 'black', 'black', 'black']}) 
        : this.setState({colors: ['White', 'White', 'White', 'White']})    
    }

    colorHalf = ()=> {
        this.setState((prevState)=>{
            const mappedColor = prevState.colors.map((color, i)=>{
                return i === 0 || i === 1 ? color = "purple" : color
            })
            return {colors: mappedColor}
        })
    }

    bleft = ()=> {
        this.setState((prevState)=>{
            const mappedColor1 = prevState.colors.map((color, i)=>{
                return i === 2 ? color = "blue" : color
            }) 
            return {colors: mappedColor1}
        })
    }

    bright = ()=> {
        this.setState((prevState)=>{
            const mappedColor2 = prevState.colors.map((color,i)=>{
                return i === 3 ? color = "blue" : color
            })
            return {colors: mappedColor2}
        })
    }
    
    topLeft = ()=>{
        this.setState((prevState)=>{
            const randColors = ['yellow','green','pink','gray','red','indigo']
            const random = randColors[Math.floor(Math.random() * randColors.length)]
            const mappedColor3 = prevState.colors.map((color, i)=>{
                return i === 0 ? color = random : color
            })
            return {colors: mappedColor3}
        })
    }

    topRight = ()=>{
        this.setState((prevState)=>{
            const randColors = ['yellow','green','pink','gray','red','indigo']
            const random = randColors[Math.floor(Math.random() * randColors.length)]
            const mappedColor4 = prevState.colors.map((color,i)=>{
                return i === 1 ? color = random : color
            })
            return {colors: mappedColor4}
        })
    }

    bottomLeft = ()=>{
        this.setState((prevState)=>{
            const randColors = ['yellow','green','pink','gray','red','indigo']
            const random = randColors[Math.floor(Math.random() * randColors.length)]
            const mappedColor5 = prevState.colors.map((color, i)=>{
                return i === 2 ? color = random : color
            })
            return {colors: mappedColor5}
        })
    }

    bottomRight = ()=>{
        this.setState((prevState)=>{
            const randColors = ['yellow','green','pink','gray','red','indigo']
            const random = randColors[Math.floor(Math.random() * randColors.length)]
            const mappedColor6 = prevState.colors.map((color, i )=>{
                return i === 3 ? color = random : color
            })
            return {colors: mappedColor6}
        })
    }
 
    render(){

        const mappedColors = this.state.colors.map((background, i)=>{
            return <Squares background={background} />
        })
        
        let {color, colorHalf, bright, bleft, topLeft, topRight, bottomLeft, bottomRight} = this
        const functions = [color, colorHalf, bright, bleft, topLeft, topRight, bottomLeft, bottomRight]
        
        return(
            <div className="container">
                {mappedColors}
               <Buttons buttons={functions} />
            </div>
        )
    }
}

export default App