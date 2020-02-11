import React, { useState } from 'react';
import roomData from '../data/room.json'
let room = roomData[0]
let roomPositions = roomData[0].positions

const Room = () => {

  const [ positions, setPositions ] = useState(roomPositions)
  const handleChange = e => {
    const {name, value} = e.target
    setPositions(value)
  }

  return(
    <div className="room">
      <div>room ID: {room.roomId}</div>
      <div> Select Room position </div>
      <select onChange={handleChange} name="positions" value={positions}>
      {roomPositions.map((id)=>{
        return(
          <>
          <option value={id}>{id}</option>
          </>
        )
      })}
      </select>
    </div>



  )
}

export default Room