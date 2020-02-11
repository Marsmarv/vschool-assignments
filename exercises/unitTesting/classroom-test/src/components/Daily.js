import React, { useState } from 'react';
import dailyData from '../data/daily.json'
let daily = dailyData
let dates = [dailyData[0].date, dailyData[1].date, dailyData[2].date]

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
          <option value="" disabled selected hidden>Please Choose date...</option>
          {daily.map(days => {
            return (<><option value={days.date}>{days.date}</option></>)  
          })}
        </select>
        
          <br/>
          <br/>

          <div>
            {day && 
              <>
                <div> date: {day} </div>
                {daily.map((date)=>{ 
                  return date.date.toString() === day &&
                  
                    <div>
                      {console.log(date)}
                      <div className='info-container'>
                        {date.students.map( student => {
                          return (
                            <>
                              <u>Student</u>
                              <div> entry id: {student.entryId} </div>  
                              <div> student id: {student.studentId} </div>  
                              <div> absent: {student.absent ? "true" : "false"} </div>  
                              <div> tardy: {student.tardy ? "true" : "false"} </div>  
                              <div> roomId: {student.roomId} </div>  
                              <div> position id: {student.positionId} </div>  
                              <br/>
                            </>
                          )
                        })}

                        {date.desks.map( desk => {
                          return (
                            <>
                            <u>Desk</u>
                            <div> entry id: {desk.entryId} </div>  
                            <div> desk id: {desk.deskId} </div>  
                            <div> status: {desk.status} </div>  
                            <div> room id: {desk.roomId} </div> 
                            <div> desk position: {desk.positionId} </div>   
                            <br/>
                            </>
                          )
                        })}
                      </div>
                    </div>

                })}
              </>
            }
          </div>
        
        {/* <div>{daily.map(day => {
           return (
            <>
              <div><b>Date: {day.date}</b></div>
              <div>{day.students.map( student => {
                return (
                  <>
                  <u>Student</u>
                  <div> entry id: {student.entryId} </div>  
                  <div> student id: {student.studentId} </div>  
                  <div> absent: {student.absent ? "true" : "false"} </div>  
                  <div> tardy: {student.tardy ? "true" : "false"} </div>  
                  <div> roomId: {student.roomId} </div>  
                  <div> position id: {student.positionId} </div>  
                  <br/>
                  </>
                )
              })}</div>

              <br/><br/>
              
              <div>{day.desks.map( desk => {
                return (
                  <>
                  <u>Desk</u>
                  <div> entry id: {desk.entryId} </div>  
                  <div> desk id: {desk.deskId} </div>  
                  <div> status: {desk.status} </div>  
                  <div> room id: {desk.roomId} </div> 
                  <div> desk position: {desk.positionId} </div>   
                  <br/>
                  </>
                )
              })}</div>
            </>
          ) 
        })}</div> */}


      </div>
    </div>
  )
}

export default Daily