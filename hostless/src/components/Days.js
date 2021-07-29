import React from 'react'
import { Link } from 'react-router-dom'
import Slots from './Slots'

const Days = ({match, restaurantState}) => {
    const days = restaurantState.daysOpen
    console.log(days)

    return (
        <div id="dayContainer">
            {days ? (
            days.map(day => {
                return(
                    <Link to={`/restaurants/${match.params.id}/${day._id}`}>{day.dayOfWeek}</Link>
                )
            
            })) : null
            }

        </div>
    )
}

export default Days
