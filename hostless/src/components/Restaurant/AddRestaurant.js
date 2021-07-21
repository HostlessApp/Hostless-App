import React, { useState } from 'react';
import AddressForm from './AddressForm';

const AddRestaurant = ({createRestaurant}) => {
    const initialState = { restaurant: '', street: '', city: '', state: '', zip: '',};
    const [formState, setFormState] = useState(initialState);

    // function getAddress(address) {
    //     setFormState(...formState, {address: addressObj})
    // }
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
        createRestaurant(formState)
        setFormState(initialState)
    }
    function handleChange(event) {
        setFormState({...formState, [event.target.id]: event.target.value})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="restaurant">Restaurant Name</label>
                <input
                    id="restaurant"
                    type="text"
                    onChange={handleChange}
                    value={formState.restaurant}
                />
                <label htmlFor="street">Street</label>
            <input
                id="street"
                type="text"
                onChange={handleChange}
                value={formState.street}
            />
            <label htmlFor="city">City</label>
            <input
                id="city"
                type="text"
                onChange={handleChange}
                value={formState.city}
            />
            <label htmlFor="state">State</label>
            <input
                id="state"
                type="text"
                onChange={handleChange}
                value={formState.state}
            />
            <label htmlFor="zip">Zip Code</label>
            <input
                id="zip"
                type="text"
                onChange={handleChange}
                value={formState.zip}
            />
                {/* <AddressForm getAddress={getAddress}/> */}
                {/* <label htmlFor="daysOpen">Days Open</label>
                <input
                    id="daysOpen"
                    type="text"
                    onChange={handleChange}
                    value={formState.daysOpen}
                />
                <label htmlFor="tables">Tables</label>
                <input
                    id="tables"
                    type="text"
                    onChange={handleChange}
                    value={formState.tables}
                /> */}
                <button type="submit">Create Restyrant</button>
            </form>
        </div>
    )
}

export default AddRestaurant
