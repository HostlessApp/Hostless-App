import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Nav = ({userState, handleAdmin, restaurantState, checkState}) => {

  useEffect(() => {

  }, [userState])

    return (
        <div>
            <nav>
              {userState.admin ? <Link class='navItem' to={`/reservations`}>Reservations</Link> : <Link class='navItem' to='/restaurants' >Find a Restaurant</Link>}
              
              {userState.admin ? <Link class='navItem' to={`/edit/restaurant/${restaurantState.internalID}`}>My Restaurant</Link> : <Link class='navItem' to='/reservations'>My Reservations</Link>}
              
              <Link class='navItem' to={`/edit/${userState.username}`}>My Profile</Link>
        
        <form onChange={() => handleAdmin()}>
          <label htmlFor="adminToggle">Admin View</label>
          <input type="checkbox" name="adminToggle" id="" checked={checkState} />
        </form>
      </nav>
        </div>
    )
}

export default Nav
