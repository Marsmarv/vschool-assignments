import React from 'react';
import deskData from '../data/desk.json'
let desks = deskData


const Desk = () => {
  return(
    <div className="desk">
      <div>
        {desks.map(desk => {
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
        })}
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