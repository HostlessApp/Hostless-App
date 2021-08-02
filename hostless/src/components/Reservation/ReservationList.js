import axios from 'axios'
import React, { useEffect } from 'react'

const ReservationList = ({
    userState, 
    reservationState, 
    reservationList, 
    setReservationList
}) => {

    useEffect(() => {
        if(userState.admin){
            axios.get(`http://localhost:3000/reservations/admin/${userState.id}`)
            .then(res => { setReservationList(res.data) })
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    return (
        <div>
            <h1>Reservations</h1>
            {
                reservationList.map( reservation => {
                    let hrs = reservation.time
                    let ap = 'am'
                    if(hrs > 12){
                        ap = 'pm'
                        hrs = hrs - 12
                    }

                    console.log('reservation::',reservation)

                    return(
                        <div id='listedReservation'>
                            <p>Restaurant: {reservation.name}</p>
                            <p>Day: {reservation.date}</p>
                            <p>Time: {hrs}:00{ap}</p>
                            <p>Party Name: {reservation.user}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ReservationList
