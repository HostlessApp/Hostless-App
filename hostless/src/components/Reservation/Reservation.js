import React from 'react'

const Reservation = ({restaurantState, reservationState, sendRes}) => {
    let hrs = reservationState.timeStr
    let ap = 'am'
    if(hrs > 12){
        ap = 'pm'
        hrs = hrs - 12
    }
    
    // console.log('day::',reservationState.date)

    return (
        <div>
            <h1>Reservation Confirmation</h1>
            <p>Restaurant: {restaurantState.name}</p>
            <p>Day: {reservationState.date}</p>
            <p>Time: {hrs}:00{ap}</p>
            <p>Party Name: {reservationState.user}</p>
            <form onSubmit={sendRes}>
                <input type="submit" value="Confirm"/>
                <input type="submit" value="Cancel" />
            </form>
        </div>
    )
}

export default Reservation