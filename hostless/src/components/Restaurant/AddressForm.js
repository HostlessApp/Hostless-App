import React, {useState} from 'react'

const AddressForm = ({getAddress}) => {
    const initialState = {street: '', city: '', state: '', zip: '', };
    const [formState, setFormState] = useState(initialState);

    function handleSubmit(event) {
        event.preventDefault();
        getAddress(formState)
        setFormState(initialState)
    }
    function handleChange(event) {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddressForm
