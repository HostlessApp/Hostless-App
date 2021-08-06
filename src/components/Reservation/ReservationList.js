import axios from 'axios'
import React, { useEffect } from 'react'
import CustomerReservations from './CustomerReservations'
import AdminReservations from './AdminReservations'

const ReservationList = ({
    userState, 
    reservationState, 
    // reservationList, 
    // setReservationList, 
    restaurantState
}) => {

    const URL = 'https://host-less.herokuapp.com'

    useEffect(() => {

    }, [userState])

  return (
      <div>
            {userState.admin ? <AdminReservations userState={userState} reservationState={reservationState} restaurantState={restaurantState}/> : <CustomerReservations userState={userState} reservationState={reservationState} restaurantState={restaurantState}/>}
      </div>
  )
    }


export default ReservationList
