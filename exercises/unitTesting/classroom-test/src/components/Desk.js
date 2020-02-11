import React, { useState } from 'react';
import deskData from '../data/desk.json'
let desks = deskData

console.log(desks)
const Desk = () => {
  const [desk , setDesk] = useState()
  const handleChange = e => {
    const {value} = e.target
    setDesk(value)
  }
  
  
  
  return(
    <div className="desk">
      <div>
        <select name="desk" value={desk}>
          <option value="" disabled selected hidden>Please Choose desk id...</option>
          {desks.map(desk=>{
            return (<><option value={desk.id}>{desk.id}</option></>)
          })}
        </select>

        <br/><br/>

        <div>
          {desk && 
            <>
              <div>id: {desk} </div>
            </>
          }
        </div>
        
        
        
        
        
        
        {/* {desks.map(desk => {
          return (
          <>

            <div>desk id: {desk.id}</div> 
            <div>desk purchase date: {desk.purchased}</div>
            <div>{desk.repairs[0] ? null : "No Repairs"}</div>
            <br/><br/>
            <div> {desk.repairs.map((repair, i) => {
              return (
                <>
                  <div><b>{i + 1}</b> repair id: {repair.repairId}</div>
                  <div>Break date: {repair.breakDate}</div> 
                 <div>fix Date: {repair.fixDate}</div> 
                 <div>issure String: {repair.issueString}</div> 
                 <div>fix String: {repair.fixString}</div> 
                 <br/>
                </>
              )  
            })} 
            ----------------------------------------------------
            </div>
            <br/><br/>

          </>
          )
        })} */}

      </div>

      <div>
        {/* desk positions:
        {desk.positions.map( deskId => { 
          return <div>{ roomId }</div>
        })} */}
      </div>

    </div>
  )
}

export default Desk