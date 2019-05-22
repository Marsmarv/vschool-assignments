import React from 'react'

const Name = (props)=>{

    const {handleChange, handleSubmit, value} = props

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text"  value={value}/>
            <button>Submit</button>
            </form>
        </div>
    )
}


export default Name
