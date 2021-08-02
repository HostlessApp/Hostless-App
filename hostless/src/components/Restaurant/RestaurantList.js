import React from 'react'
import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios";

const RestaurantList = ({restaurantList, setRestaurantList, reservationState, setReservationState}) => {
    
    useEffect(() => {
        axios.get('http://localhost:3000/restaurants')
            .then(res => {
                setRestaurantList(res.data)
            })
        },[])

    const updateReservation =(data) => {
        setReservationState(reservationState => {
            return {...reservationState, restaurant: data}
          })
      }

    return (
        <div>
            {restaurantList.map(restaurant => {
            return(
                <div>  
                    <Link to={'/restaurants/' + restaurant.internalID}>
                        <div id="restaurantReq" onClick={() => updateReservation(restaurant.internalID)}>
                            <h3 class ='removeLink'>{restaurant.name}</h3>
                            <p class ='removeLink'>{restaurant.description}</p>
                        </div>
                    </Link>
                </div>
            )}
            )}
        </div>
    )
}

export default RestaurantList
