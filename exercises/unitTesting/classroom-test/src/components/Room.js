import React from 'react';
import roomData from '../data/room.json'
let room = roomData[0]

const Room = () => {
  return(
    <div className="room">
      
      <div>
        <div>room id: {room.roomId}</div>
      </div>
      <br/>
      <div>
        room positions:
        {room.positions.map( roomId => { 
          return (
          <>
            <div>{ roomId }</div>
            <button>choose id</button>
          </>
          )
        })}
      </div>
        ======================================
    </div>
  )
}

export default Room