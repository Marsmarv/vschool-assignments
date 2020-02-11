import React, { useState } from 'react';
import roomData from '../data/room.json'
import Daily from './Daily'
let room = roomData[0]


const Room = () => {
  const [chosenDesk, setChosenDesk] = useState()
  return(
    <>
    {/* room position */}
    <div className="room">
      <div>room id: {room.roomId}</div><br/>
      <div className="position-container">
        <u>room positions</u>
        <div className="positions" >
          {room.positions.sort().map( roomId => { 
            return (<><div className="desks" onClick={()=>{setChosenDesk(roomId)}}>id: { roomId }</div></>)
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default Room