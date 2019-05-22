import React, { Component } from 'react';

class App extends Component {
    constructor(){ 
        super()

        this.state = {
            fName: "",
            lName: "",
            age: "",
            gender: "",
            locations: "",
            isChecked: "",

        }
     }
    
     handleChange = (event) => {
        event.preventDefault()
        const {checked, type} = event.target
        return type === 'checkbox' ? this.isChecked = checked : null
        
        }       
//     handleSubmit = (e) => {
//             e.preventDefault()
//             const {name, checked, type} = e.target
//                 let value;
//                 if(type === 'checkbox'){
//                         value = checked
//                         } else {
//                         value = e.target.value
//                         }

//                 this.setState({[name]: value})


    render() { 
        return ( 
            <form onSubmit={this.handleSubmit} >
                <input  type="text" 
                        name="fName"
                        value={this.state.fName}
                        placeholder="First name" /> <br/>
                <input  type="text" 
                        name="lName"
                        value={this.state.lName}
                        placeholder="Last name"/> <br/>
                Male
                <input  type="radio" 
                        name="gender" 
                        value="male"/> <br/>
                Female
                <input  type="radio" 
                        name="gender" 
                        value="female"/> <br/>
                Other
                <input  type="radio" 
                        name="gender" 
                        value="other"/> <br/>
                Locations:
                <select name="locations" 
                        value={this.state.locations}>
                        <option value="London">London</option>
                        <option value="California">California</option>
                        <option value="Japan">Japan</option>
                        <option value="New York">New York</option>
                </select> <br/>
                Vegetarian
                <input type="checkbox" name="isChecked" value={this.state.isChecked} onChange={this.handleChange}/>
                Kosher
                <input type="checkbox" name="isChecked" value={this.state.isChecked} onChange={this.handleChange}/>
                Lactose free
                <input type="checkbox" name="isChecked" value={this.state.isChecked} onChange={this.handleChange}/> <br/>
                <button>Submit</button>
            </form>
         );
    }
}
 
export default App;