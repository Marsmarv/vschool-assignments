import React from 'react'
import Spots from './Spots'


let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring",
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter",
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall",
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer",
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring",
      background: ""
    }
  ]

const VacationBox = ()=>{
    const mappedSpots = vacationSpots.map((spot, i)=>{
        // if(vacationSpots[i].timeToGo === "Spring"){
        //     spot.background = "Green"
        // } else if (vacationSpots[i].timeToGo === "Winter"){
        //     spot.background = "Grey"
        // } else if (vacationSpots[i].timeToGo === "Fall"){
        //     spot.background = "Orange"
        // } else if (vacationSpots[i].timeToGo === "Summer"){
        //     spot.background = "Red"
        // }

        switch(vacationSpots[i].timeToGo){
            case "Spring":
            spot.background = 'green'
            break;
            case "Fall":
            spot.background = 'orange'
            break;
            case "Summer":
            spot.background = 'red'
            break;
            case "Winter":
            spot.background = 'gray'
            break;
        }

        return <Spots spot={spot} />
    })
    return (
        <div className="main-container">
            {mappedSpots}

        </div>
    )
}


export default VacationBox