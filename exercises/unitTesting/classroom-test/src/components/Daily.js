import React from 'react';
import dailyData from '../data/daily.json'
let daily = dailyData

const Daily = () => {
  return(
    <div className="daily">
      {console.log(daily)}
      <div>
        <div>{daily.map(day => {
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
        })}</div>
      </div>
     
        ======================================
    </div>
  )
}

export default Daily