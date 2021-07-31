import React from 'react'
import {useState} from 'react'

const EditRestaurant = ({restaurantState, updateRestaurant}) => {

const [formState, setFormState] = useState(restaurantState)

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState)
        const addressObj = {
            street: formState.street,
            city: formState.city,
            state: formState.state,
            zip: formState.zip
        }
        setFormState(formState, addressObj)
        updateRestaurant(formState)
        setFormState(restaurantState)
    }
    function handleChange(event) {
        setFormState({...formState, [event.target.id]: event.target.value})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Restaurant Name: </label>
                <input
                    id="name"
                    type="text"
                    onChange={handleChange}
                    value={formState.name}
                />
                <label htmlFor="street">Street: </label>
            <input
                id="street"
                type="text"
                onChange={handleChange}
                value={formState.address.street}
            />
            <label htmlFor="city">City: </label>
            <input
                id="city"
                type="text"
                onChange={handleChange}
                value={formState.address.city}
            />
            <label htmlFor="state">State: </label>
            <input
                id="state"
                type="text"
                onChange={handleChange}
                value={formState.address.state}
            />
            <label htmlFor="zip">Zip Code: </label>
            <input
                id="zip"
                type="text"
                onChange={handleChange}
                value={formState.address.zip}
            />
              
                <button type="submit">Update My Restaurant</button>
            </form>
        </div>
    )
}

export default EditRestaurant
