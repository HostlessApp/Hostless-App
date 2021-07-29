import React from 'react'
import { Route, Link } from 'react-router-dom'
import { useState,useEffect } from 'react'

const Nav = ({userState, handleAdmin}) => {

    return (
        <div>
            <nav>
        <Link class='navItem' to='/restaurants' >Find a Restaurant</Link>
        <Link class='navItem' to='/reservations'>My Reservations</Link>
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
