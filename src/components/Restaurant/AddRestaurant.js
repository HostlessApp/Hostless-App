import React, { useState, useEffect } from 'react';
import AboutRestaurant from './AboutRestaurant';
import DaysForm from './DaysForm';
import TableFormList from './TableFormList';
import axios from 'axios';

const initialTables = [
    {
        tableNumber: 1,
        size: 4,
    },
    {
        tableNumber: 2,
        size: 7,
    },
    {
        tableNumber: 3,
        size: 2,
    },
]

const AddRestaurant = ({createRestaurant}) => {
    const [restaurant, setRestaurant] = useState({about: {}, hours: {}, tables: initialTables, internalID:''})

    var resCount

    const countRestaurants = () => {
        axios.get('http://localhost:3000/restaurants')
            .then(res => {
                resCount = res.data.length+1
                console.log(resCount)
                setRestaurant({...restaurant, internalID: resCount})
            })
    }

    useEffect(() => {
        countRestaurants()
    }, [])

    function postRestaurant() {
        console.log(restaurant)
        createRestaurant(restaurant)
    }

    return (
        <div className="newRestaurant">
            <AboutRestaurant restaurant={restaurant} setRestaurant={setRestaurant}/>
            <DaysForm restaurant={restaurant} setRestaurant={setRestaurant} />
            <TableFormList restaurant={restaurant} setRestaurant={setRestaurant} />
            <button onClick={postRestaurant}>Create Your Restaurant</button>
        </div>
    )
}

export default AddRestaurant
