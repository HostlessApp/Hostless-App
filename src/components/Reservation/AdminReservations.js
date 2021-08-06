import axios from 'axios'
import React, { useEffect, useState } from 'react'



const AdminReservations = ({
    userState, 
    reservationState,  
    restaurantState
}) => {
    
    const [reservationList, setReservationList] = useState([])

    const URL = 'https://host-less.herokuapp.com'
    
    useEffect(() => {

            axios.get(URL + `/reservations/admin/${restaurantState.internalID}`)
            .then(res => { 
                setReservationList(res.data.reservations) 
            })
            .then(()  => {
                console.log(reservationList)
            })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

        return(
            <div>
                <h1>Reservations</h1>
                {reservationList ? (
                    reservationList.map(reservation => {
                            return(
                                <div id='listedReservation'>
                                    
                                    <p>{reservation.day} at {reservation.reservationSlot.time.hour}:00</p>
                                    <p>For: {reservation.user.name.first} {reservation.user.name.last}</p>
                                        
                                </div>
                            )
                        })
                )
            : <p>No Reservations</p>
            }
            </div>
        )
    }

export default AdminReservations
