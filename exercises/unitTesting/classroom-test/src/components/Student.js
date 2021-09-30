import React, { useState } from 'react';
import studentData from '../data/student.json'
import Fade from 'react-reveal'
import roomData from '../data/room.json'
import dailyData from '../data/daily.json'
let students = studentData
let room = roomData[0]

const Student = () => {
  const [studentId, setStudentId] = useState()
  const handleChange = e => {
    const {value} = e.target
    setStudent(value)
  }
  return(
    <>
      <div className="student">
        <div>
          <select onChange={handleChange}name="student" value={student}>
            <option value="" selected>Choose Student...</option>
            {students.map(student => {
              return (<><option value={student.id}>{student.bio.givenName}</option></>)
            })}
          </select>
          <br/><br/>
          <div>
            {studentId && 
              <>
                {students.map((studentInfo, i)=>{
                  return studentInfo.id.toString() === studentId &&
                  <Fade>
                    <div>
                      <u>STUDENT BIO {i + 1}</u>
                        <div> Student id: {studentInfo.id}</div>
                        <div>Given Name: {studentInfo.bio.givenName}</div>
                        <div>Family Name: {studentInfo.bio.familyName}</div>
                        <div>NickName: {studentInfo.bio.nickName}</div>
                        <div>Email: {studentInfo.bio.email}</div>
                        <div>Age: {studentInfo.bio.age}</div>
                        <div>Grade: {studentInfo.bio.grade}</div>
                      <br/>
                      student history: 
                        <div>abscences: {studentInfo.history.absences}</div>
                        <div>GPA: {studentInfo.history.gpa}</div>
                      <br/>
                      student grades: 
                        <div>Project: {studentInfo.grades.project1}</div>
                        <div>Project: {studentInfo.grades.project2}</div>
                        <div>Project: {studentInfo.grades.project3}</div>
                        <div>Project: {studentInfo.grades.project4}</div>
                      <br/>
                    </div>
                  </Fade>
                })}
                <div>
                  <div className="room">
                    <div><b>room id:</b> {room.roomId}</div>
                    <div className="position-container">
                      <h3><u>room positions</u></h3>
                      <Fade><div className="positions" >
                        {room.positions.sort().map( roomId => { 
                          return (<><div className="desks">desk id: { roomId }</div></>)
                        })}
                      </div></Fade>
                    </div>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Student