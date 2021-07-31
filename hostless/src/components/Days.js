import React from 'react'
import { Link } from 'react-router-dom'
import Slots from './Slots'

const Days = ({match, restaurantState, reservationState, setReservationState}) => {
    const days = restaurantState.daysOpen
    console.log(days)

    const updateReservation =(data) => {
        setReservationState(reservationState => {
            console.log(data)
            return {...reservationState, date: data}
          })
          console.log(reservationState)
      }

    return (
        <div id="dayContainer">
            {days ? (
            days.map(day => {
                return(
                    <Link to={`/restaurants/${match.params.id}/${day._id}`}>{day.dayOfWeek} onClick={() => updateReservation(day._id)}</Link>
                )
            })) : null
            }

        </div>
    )
}

export default Days
