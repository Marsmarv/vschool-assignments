import React from 'react';
import studentData from '../data/student.json'
let students = studentData

const Student = () => {
  return(
    <div className="student">
      {students.map((student)=>{
        return (
          <div>
            <u>Student bio</u>
            <div> Student id: {student.id}</div>
            <div>Given Name: {student.bio.givenName}</div>
            <div>Family Name: {student.bio.familyName}</div>
            <div>NickName: {student.bio.nickName}</div>
            <div>Email: {student.bio.email}</div>
            <div>Age: {student.bio.age}</div>
            <div>Grade: {student.bio.grade}</div>
            <br/>
            student history: 
            <div>abscences: {student.history.absences}</div>
            <div>GPA: {student.history.gpa}</div>
            <br/>
            student grades: 
            <div>Project: {student.grades.project1}</div>
            <div>Project: {student.grades.project2}</div>
            <div>Project: {student.grades.project3}</div>
            <div>Project: {student.grades.project4}</div>
            <br/>
          </div>
        )
      })}
    </div>
  )
}

export default Student