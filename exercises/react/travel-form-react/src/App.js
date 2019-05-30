import React, { Component } from 'react';

class App extends Component {
    constructor(){ 
        super()

        this.state = {
            fName: "",
            lName: "",
            age: "",
            gender: "",
            locations: [],
            diet: [],
            isChecked: false,
        }
     }
    
     handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})       
        }       

     handleSubmit = (e) => {
            e.preventDefault()
            const { fName, lName, age, gender, locations, diet } = this.state
                
            alert(`
                Name: ${fName} ${lName}
                Age: ${age}
                Gender: ${gender}
                Location: ${locations}
                Diet: ${diet}
            `)
        }

        handleCheckbox = (e) =>{
			const {value, checked} = e.target
			checked ? this.setState(({diet})=>({diet: [...diet, value]}))
			: this.setState(({diet})=>({diet: diet.filter((food)=> food !== value )}))
                
			// this.setState((prevState) => {
			//        return {
			//            diet: [...prevState.diet, value ]
			//        }
			// })
	}


    render() { 
        const { handleChange, handleSubmit, state:{fName, lName, locations, age}, handleCheckbox } = this
        return ( 
			<form onSubmit={handleSubmit} >
				<input  onChange={handleChange}
					type="text" 
					name="fName"
					value={fName}
					placeholder="First name" /> <br/>
				<input  onChange={handleChange}
					type="text" 
					name="lName"
					value={lName}
					placeholder="Last name"/> <br/>
				<input  onChange={handleChange}
					type="number"
					name="age"
					value={age}
					placeholder="Age" /> <br/>
				Male
				<input  onChange={handleChange}
					type="radio" 
					name="gender" 
					value="Male"/> <br/>
				Female
				<input  onChange={handleChange}
					type="radio" 
					name="gender" 
					value="Female"/> <br/>
				Other
				<input  onChange={handleChange}
					type="radio" 
					name="gender" 
					value="Other"/> <br/>
				Locations:
				<select onChange={handleChange}
					name="locations" 
					value={locations}>
					<option value="London">London</option>
					<option value="California">California</option>
					<option value="Japan">Japan</option>
					<option value="New York">New York</option>
				</select> <br/>
				Vegetarian
				<input type="checkbox" name="isChecked" value=' Vegetarian' onChange={handleCheckbox}/>
				Kosher
				<input type="checkbox" name="isChecked" value=' Kosher' onChange={handleCheckbox}/>
				Lactose free
				<input type="checkbox" name="isChecked" value=' Lactose free' onChange={handleCheckbox}/> <br/>
				<button>Submit</button>
			</form>
        )
    }
}
 
export default App;