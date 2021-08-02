import React from 'react'
import { Link } from 'react-router-dom'

const Days = ({match, restaurantState, reservationState, setReservationState}) => {
    const days = restaurantState.daysOpen

    const updateReservation =(data) => {
        setReservationState(reservationState => {
            return {...reservationState, date: data}
          })
        //   console.log(reservationState)
      }

    return (
        <div id="dayContainer">
            {days ? (
            days.map(day => {
                return(
                    <Link to={`/restaurants/${match.params.id}/${day._id}`} onClick={() => updateReservation(day.dayOfWeek)} >{day.dayOfWeek}</Link>
                )
            })) : null
            }

        </div>
    )
}

export default Days
