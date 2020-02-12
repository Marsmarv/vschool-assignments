import React, { useState } from 'react';
import roomData from '../data/room.json'
import Daily from '../data/daily.json'
let room = roomData[0]


const Room = () => {
  const [deskChosen, setDeskChosen] = useState()
  const [modal, setModal] = useState()
  const modalDisplay = modal ? "show-modal" : "no-display"
  return(
    <>
      <div className="room">
        <div><b>room id:</b> {room.roomId}</div>
        <div className="position-container">
         <h3><u>room positions</u></h3>
         <button onClick={()=>{setModal(false)}}>clear room positions info</button>
          <div className="positions" >
            {room.positions.sort().map( roomId => { 
              return (<><div className="desks" onClick={()=>{setDeskChosen(roomId); setModal(true)}}>id: { roomId }</div></>)
            })}
          </div>
        </div>
      </div>

      <div>
        {deskChosen && 
          <div className="modal-container">
            {Daily.map( deskChosenInfo => {
              return deskChosenInfo.desks.map(deskEntry => {
                return deskChosen === deskEntry.positionId &&
                <div className={modalDisplay}>
                  <div className="modal-info">date:{deskChosenInfo.date}</div>
                  <div className="modal-info">Entry Id: {deskEntry.entryId}</div>
                  <div className="modal-info">Desk Id: {deskEntry.deskId}</div>
                  <div className="modal-info">Status: {deskEntry.status}</div>
                </div>
              })
            })}
          </div>
        }
      </div>
    </>
  )
}

export default Room