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

        if (vacationSpots[i].price < 500){
            spot.expense = "$";
        } else if (vacationSpots[i].price < 1000 && vacationSpots[i].price >= 500){
            spot.expense = "$$";
        } else if (vacationSpots[i].price > 1000) {
            spot.expense = "$$$"
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