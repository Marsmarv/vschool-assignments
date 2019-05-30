import React from 'react'

const Form = (props)=>{
    const { handleSubmit, handleChange } = props
    let [fName, lName, email, birthPlace, phone, favFood, description] = props.form
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} className="form" type="text" value={fName} placeholder="first name" name="fName" /><br/>
                <input onChange={handleChange} className="form" type="text" value={lName} placeholder="last name" name="lName" /><br/>
                <input onChange={handleChange} className="form" type="text" value={email} placeholder="email" name="email" /><br/>
                <input onChange={handleChange} className="form" type="text" value={birthPlace} placeholder="birth place" name="birthPlace" /><br/>
                <input onChange={handleChange} className="form" type="text" value={phone} placeholder="phone" name="phone" /><br/>
                <input onChange={handleChange} className="form" type="text" value={favFood} placeholder="favorite food" name="favFood" /><br/>
                <input onChange={handleChange} className="form" type="text" value={description} placeholder="description" name="description" /><br/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form