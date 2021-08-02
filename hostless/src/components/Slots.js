import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const Slots = ({restaurantState, match, reservationState, setReservationState}) => {

    const [timesState, setTimesState] = useState([])

    const updateReservation =(data) => {
        setReservationState(reservationState => {
            return {...reservationState, time: data}
          })
          console.log(reservationState)
      }

      const fetchDay = () => {
          axios.get(`http://localhost:3000/restaurants/day/${match.params.dayId}`)
            .then(res => {
                setTimesState(res.data)
            })
      }

      useEffect(() =>{
          fetchDay()
      },[])

    return (
        <div>
            <h1>{restaurantState.name}</h1>
            {timesState.map(time => {
                return(
                    <div>
                        {time.isReserved ? <p>{time.time.hour}:00</p> : <Link to={`/restaurants/${match.params.id}/${match.params.dayId}/${time._id}`} onClick={() => updateReservation(time.time.hour)}>{time.time.hour}:00</Link>}
                    </div>
                )
            })}

        </div>
    )
}

export default Slots
