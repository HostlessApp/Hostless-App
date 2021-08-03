import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Reservation = ({restaurantState, reservationState, setReservationState, sendRes, cancelRes, findUser, userState}) => {
    let hrs = reservationState.timeStr
    let ap = 'am'
    if(hrs > 12){
        ap = 'pm'
        hrs = hrs - 12
    }
    
    
    const confirmReservation = () => {
        findUser()
        // console.log('reserve here: ', reserve)
        axios.post('http://localhost:3000/reservations', reservationState)
        .then(res => console.log('reservation posted: ', res))
        sendRes()        
    }
    
    return (
        <div>
            <h1>Reservation Confirmation</h1>
            <p>Restaurant: {restaurantState.name}</p>
            <p>Day: {reservationState.date}</p>
            <p>Time: {hrs}:00{ap}</p>
            <p>Party Name: {userState.username}</p>
            {/* <form onSubmit={sendRes}> */}
            <form onSubmit={() => confirmReservation(findUser)}>
                <input type="submit" value="Confirm"/>
                {/* <input type="button" onClick={cancelRes} value="Cancel" /> */}
                {/* <input type="button" value="Cancel" to='/reservations' renderAs={Link} /> */}
                <Link to='/reservations'>
                    <input type="button" value="Cancel" />
                </Link>
            </form>
            
        </div>
    )
}

export default Reservation