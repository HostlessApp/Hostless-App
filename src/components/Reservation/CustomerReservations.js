import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CustomerReservations = ({
    userState, 
    reservationState, 
    restaurantState
}) => {

    
    const [reservationList, setReservationList] = useState([])

    const URL = 'https://host-less.herokuapp.com'

    useEffect(() => {
        
        axios.get(URL + `/users/${userState.username}`)
        .then(res => { 
            let newList = res.data
        setReservationList(newList) 
        })
        .then(() => {
            console.log(reservationList)   
        })


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    console.log('initial state: ' + reservationList)
    
    return (
        <div>
            {reservationList  ? (
                reservationList.map(reservation => {
                    return(
                        <div>
                            <h1>{reservation.name.first}'s Reservations</h1>
                            {reservation.reservations.map(r => {
                                return(
                                    <div id='listedReservation'>
                                        <p>{r.day} at {r.reservationSlot.time.hour}:00</p>
                                        <p>Restaurant: {r.restaurant.name}</p>
                                        <p>Address: {r.restaurant.address.street}, {r.restaurant.address.city} {r.restaurant.address.state}, {r.restaurant.address.zip} </p>
                                    </div>
                                )
                                })
                            }
                        </div>
                )
            })
            )
            : <p>No Reservations</p>
            }   
        </div>
    )
}

export default CustomerReservations
