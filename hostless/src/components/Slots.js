import React from 'react'
import {Link} from 'react-router-dom'

const Slots = ({restaurantState, match}) => {
    console.log(restaurantState)
    return (
        <div>
            <h1>{restaurantState.name}</h1>
            <Link to={`/restaurants/${match.params.id}/${match.params.dayId}/resId`}>Available Time</Link>

        </div>
    )
}

export default Slots
