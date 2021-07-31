import React from 'react'
import axios from 'axios'
import Days from '../Days'
import { useState, useEffect } from 'react'

const RestaurantDetail = ({match, setRestaurant, restaurantState, reservationState, setReservationState}) => {



    function findRestaurant() {
        axios.get(`http://localhost:3000/restaurants/${match.params.id}`)
          .then(res => {
            setRestaurant(res.data[0])
        })
        console.log(restaurantState)
          }

    useEffect(() => {
        findRestaurant()
    }, [])

    console.log(match.params.id)
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
