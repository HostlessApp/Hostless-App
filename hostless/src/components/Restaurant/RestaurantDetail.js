import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const RestaurantDetail = ({match}) => {

    var restaurantRes

    function findRestaurant() {
        axios.get(`http://localhost:3000/restaurants/${match.params.id}`)
          .then(res => {
            console.log(res.data)
        //      restaurantRes = res.data.filter(item => item.internalID === match.params.id)
        //   console.log(restaurantRes)
        })
          }

    useEffect(() => {
        findRestaurant()
    }, [])

    console.log(match.params.id)
    return (
        <div>
            <h1>hi</h1>
        </div>
    )
}

export default RestaurantDetail
