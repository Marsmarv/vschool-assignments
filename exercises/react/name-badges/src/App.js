import React, { Component } from 'react';
import Form from './Form'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fName: "",
            lName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favFood: "",
            description: "",
            people: []
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const { fName, lName, email, birthPlace, phone, favFood, description } = this.state
        const newPerson = {fName, lName, email, birthPlace, phone, favFood, description}
        this.setState( prevState => ({people: [...prevState.people, newPerson]}) )
    }

    render() { 
        console.log(this.state.people)
        const {handleChange, handleSubmit, state:{fName, lName, email, birthPlace, phone, favFood, description}} = this
        const values = [fName, lName, email, birthPlace, phone, favFood, description]
        const mappedPeople = this.state.people.map((input)=>{
            return <h3>Name: {input.fName} Last Name: {input.lName} email: {input.email}</h3>
        })
        return ( 
            <>
            <div>
                <Form handleChange={handleChange} handleSubmit={handleSubmit} form={values}  />
            </div>
            <div>
            {mappedPeople}
            </div>
            </>
        )
    }
}
 
export default App