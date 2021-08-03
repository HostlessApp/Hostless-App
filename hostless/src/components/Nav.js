import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({userState, handleAdmin, restaurantState}) => {

    return (
        <div>
            <nav>
              {userState.admin ? <Link class='navItem' to={`/reservations/admin/${restaurantState.internalID}`}>Reservations</Link> : <Link class='navItem' to='/restaurants' >Find a Restaurant</Link>}
              
              {userState.admin ? <Link class='navItem' to={`/edit/restaurant/${restaurantState.internalID}`}>My Restaurant</Link> : <Link class='navItem' to='/reservations'>My Reservations</Link>}
              
              <Link class='navItem' to={`/edit/${userState.username}`}>My Profile</Link>
        
        <form onChange={(handleAdmin)}>
          <label htmlFor="adminToggle">Admin View</label>
          <input type="checkbox" name="adminToggle" id="" />
        </form>
      </nav>
        </div>
    )
}

export default Nav
