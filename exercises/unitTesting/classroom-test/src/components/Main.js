import React from 'react';
import roomData from '../data/room.json'
import deskData from '../data/desk.json'
import studentData from '../data/student.json'
import dailyData from '../data/daily.json'

const Main = () => {
  return(
    <>
    {console.log("room data:",roomData)}
    {console.log("student data:",studentData)}
    {console.log("Desk data:",deskData)}
    {console.log("Daily data:",dailyData)}

    {roomData[0].roomId}
    {deskData[0].id}
    {studentData[0].bio.givenName}
    {dailyData[0].date}
    </>
  )
}

export default Main