import React, { Component } from 'react';

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

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState((prevState) => {
            return {

            }
        })
    }

    render() { 
        
        return ( 
            <div>
                <form onSubmit={onSubmit}>
                    <input class="form" type="text" value="" placeholder="first name" name="fName" /><br/>
                    <input class="form" type="text" value="" placeholder="last name" name="lName" /><br/>
                    <input class="form" type="text" value="" placeholder="email" name="email" /><br/>
                    <input class="form" type="text" value="" placeholder="birth place" name="birthPlace" /><br/>
                    <input class="form" type="text" value="" placeholder="phone" name="phone" /><br/>
                    <input class="form" type="text" value="" placeholder="favorite food" name="favFood" /><br/>
                    <input class="form" type="text" value="" placeholder="description" name="description" /><br/>
                    <button>Submit</button>
                </form>
            </div>
         )
    }
}
 
export default App