import React from 'react'
import axios from 'axios'
import Days from '../Days'
import { useEffect } from 'react'

const RestaurantDetail = ({match, setRestaurant, restaurantState, reservationState, setReservationState}) => {

    const URL = 'https://host-less.herokuapp.com'

    function findRestaurant() {
        axios.get(URL + `/restaurants/${match.params.id}`)
          .then(res => {
            setRestaurant(res.data[0])
        })
          }

    useEffect(() => {
        findRestaurant()
    }, [])

    return (
        <div>
            <h1>{restaurantState.name}</h1>
            <div>
                <p>{restaurantState.description}</p>
            </div>
            <Days match={match} restaurantState={restaurantState} reservationState={reservationState} setReservationState={setReservationState} />
        </div>
    )
}

export default RestaurantDetail