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
            .then(res => { 
                setReservationList(res.data) 
            })
        } else {
            axios.get(`http://localhost:3000/reservations`)
            .then(res => { setReservationList(res.data) })
        } 
        console.log(reservationList)    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    return (
        <div>
            <h1>Reservations</h1>
            {
                reservationList.map( reservation => {
                    let hrs = reservation.timeStr
                    let ap = 'am'
                    if(hrs > 12){
                        ap = 'pm'
                        hrs = hrs - 12
                    }

                    console.log('reservation::',reservation)
                    
                    console.log('pos')
                    return(
                        <div>
                            { reservation.user.username === userState.username ? 
                                <div id='listedReservation'>
                                    <p>Restaurant: {reservation.name}</p>
                                    <p>Day: {reservation.date}</p>
                                    <p>Time: {hrs}:00{ap}</p>
                                    <p>Party Name: {reservation.user}</p>
                                </div>
                            : null }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ReservationList
