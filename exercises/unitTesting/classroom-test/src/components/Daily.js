import React, { useState } from 'react';
import dailyData from '../data/daily.json'
import Fade from 'react-reveal'
let daily = dailyData

const Daily = () => {
  const [ day, setDay] = useState()
  const handleChange = e => {
    const {value} = e.target
    setDay(value)
  }
  return(
    <div className="daily">
      <div>
        <select onChange={handleChange} placeholder="chicken" name="day" value={day}>
          <option value="" selected >Choose date...</option>
          {daily.map(days => {
            return (<><option value={days.date}>{days.date}</option></>)  
          })}
        </select>
        <br/><br/>
        <div>
          {day && 
            <>
              <div> date: {day} </div>
              {daily.map((date)=>{ 
                return date.date.toString() === day &&
                <>
                  <Fade><div className='info-container'>
                    {date.students.map( student => {
                      return (
                        <div>
                          <u>Student</u>
                          <div> entry id: {student.entryId} </div>  
                          <div> student id: {student.studentId} </div>  
                          <div> absent: {student.absent ? "true" : "false"} </div>  
                          <div> tardy: {student.tardy ? "true" : "false"} </div>  
                          <div> roomId: {student.roomId} </div>  
                          <div> position id: {student.positionId} </div>  
                          <br/>
                        </div>
                      )
                    })}
                  </div></Fade>
                  <br/>------------------------------------------------------------
                  -----------------------------------------------------------------
                  -----------------------------------------------------<br/>
                  <div className="info-container">
                    {date.desks.map( desk => {
                      return (
                        <div>
                          <u>Desk</u>
                          <div> entry id: {desk.entryId} </div>  
                          <div> desk id: {desk.deskId} </div>  
                          <div> status: {desk.status} </div>  
                          <div> room id: {desk.roomId} </div> 
                          <div> desk position: {desk.positionId} </div>   
                          <br/>
                        </div>
                      )
                    })}
                  </div>
                </>
              })}
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Daily