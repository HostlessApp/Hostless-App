import React from 'react'

const Reservation = ({sendRes}) => {
    return (
        <div>
            <h1>Confirmation</h1>
            <form onSubmit={sendRes}>
                <input type="submit" value="Confirm"/>
                <input type="submit" value="Cancel" />
            </form>
        </div>
    )
}

export default Reservation
