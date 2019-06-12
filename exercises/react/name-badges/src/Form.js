import React from 'react'

const Form = (props)=>{
  const { handleSubmit, handleChange } = props
  let [fName, lName, email, birthPlace, phone, favFood, description] = props.form
  return(
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} className="form fname" type="text" value={fName} placeholder="first name" name="fName" />
        <input onChange={handleChange} className="form lname" type="text" value={lName} placeholder="last name" name="lName" />
        <input onChange={handleChange} className="form email" type="text" value={email} placeholder="email" name="email" />
        <input onChange={handleChange} className="form bplace" type="text" value={birthPlace} placeholder="birth place" name="birthPlace" />
        <input onChange={handleChange} className="form phone" type="text" value={phone} placeholder="phone" name="phone" />
        <input onChange={handleChange} className="form favfood" type="text" value={favFood} placeholder="favorite food" name="favFood" />
        <input onChange={handleChange} className="form des" type="text" value={description} placeholder="description" name="description" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form