import React from 'react'
import {Link} from 'react-router-dom'

const Slots = ({restaurantState, match, reservationState, setReservationState}) => {
    console.log(restaurantState)

    const updateReservation =(data) => {
        setReservationState(reservationState => {
            console.log(data)
            return {...reservationState, time: data}
          })
          console.log(reservationState)
      }

    return (
        <div>
            <h1>{restaurantState.name}</h1>
            <Link to={`/restaurants/${match.params.id}/${match.params.dayId}/resId`}>Available Time</Link>

        </div>
    )
}

export default Slots
