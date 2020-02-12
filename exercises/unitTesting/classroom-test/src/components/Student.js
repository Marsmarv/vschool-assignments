import React, { useState } from 'react';
import studentData from '../data/student.json'
import Fade from 'react-reveal'
let students = studentData

const Student = () => {
  const [student, setStudent] = useState()
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
              return (<><option value={student.id}>{student.id}</option></>)
            })}
          </select>
          <br/><br/>
          <div>
            {student && 
              <>
                {students.map((studentInfo, i)=>{
                  return studentInfo.id.toString() === student &&
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
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Student