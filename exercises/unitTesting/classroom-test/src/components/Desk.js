import React, { useState } from 'react';
import deskData from '../data/desk.json'
let desks = deskData

const Desk = () => {
  const [desk , setDesk] = useState()
  const handleChange = e => {
    const {value} = e.target
    setDesk(value)
  }
  return(
    <div className="desk">
      <div>
        <select onChange={handleChange}name="desk" value={desk}>
          <option value="" selected>Choose Desk id...</option>
          {desks.map(desk=>{
            return (<><option value={desk.id}>{desk.id}</option></>)
          })}
        </select>
        <br/><br/>
        <div>
          {desk && 
            <>
              <div>id: {desk} </div>
              {desks.map(deskInfo => {
                return deskInfo.id === desk &&
                <>
                  <div className="">purchased: {deskInfo.purchased}</div>
                  <div>{deskInfo.repairs[0] ? null : "No Repairs"}</div>
                  <br/><br/>
                  {deskInfo.repairs.map((repair, i) => {
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
                </>
              })}
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Desk