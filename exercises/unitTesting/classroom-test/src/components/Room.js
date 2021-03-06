import React, { useState } from 'react';
import roomData from '../data/room.json'
import Daily from '../data/daily.json'
import Student from '../data/student.json'
import Fade from 'react-reveal'
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
          <div>Click on a desk</div>
          <Fade><div className="positions" >
            {room.positions.sort().map( roomId => { 
              return (<><div className="desks" onClick={()=>{setDeskChosen(roomId); setModal(true)}}>desk id: { roomId }</div></>)
            })}
          </div></Fade>
        </div>
      </div>

      <div>
        {deskChosen && 
          <div className="modal-container">
            {Daily.map( deskChosenInfo => {
              return deskChosenInfo.desks.map(deskEntry => {
                return deskChosen === deskEntry.positionId &&
                <Fade><div className={modalDisplay}>
                  <div className="modal-info">date:{deskChosenInfo.date}</div>
                  <div className="modal-info">Entry Id: {deskEntry.entryId}</div>
                  <div className="modal-info">Desk Id: {deskEntry.deskId}</div>
                  <div className="modal-info">Status: {deskEntry.status}</div>
                </div></Fade>
              })
            })}

            {Daily.map(studentInSeat => {
              return studentInSeat.students.map(posId => {
                return posId.positionId === deskChosen &&
                <Fade><div className="a">
                  {Student.map(name => {
                    return name.id === posId.studentId &&
                    <>
                      <div className="student-info">{name.bio.givenName} {name.bio.familyName}</div>
                      <div className="student-info">{name.bio.email}</div>
                      <div className="student-info">nickname: {name.bio.givenName !== name.bio.nickName ? name.bio.nickName : "N/A"}</div>
                      <div className="student-info">age: {name.bio.age}</div>
                      <div className="student-info">grade: {name.bio.grade}</div>
                    </>
                  })}
                </div></Fade>
              })
            })}
          </div>
        }
      </div>
    </>
  )
}

export default Room