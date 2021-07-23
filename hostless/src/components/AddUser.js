import React, {useState} from 'react'

const AddUser = ({createUser}) => {
    const initialState = {firstName: '', lastName: '', admin: false}
    const [formState, setFormState] = useState(initialState);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState)
        const newUser = {
            firstName: formState.firstName, 
            lastName: formState.lastName, 
            admin: formState.admin
        }
        setFormState(formState, newUser)
        createUser(formState)
        setFormState(initialState)
        }
    
    function handleChange(event){
        console.log(formState)
        setFormState({...formState, [event.target.id]: event.target.value})
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" onChange={handleChange} value={formState.firstName} />
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" onChange={handleChange} value={formState.lastName} />
                <label htmlFor="admin">I am here to post my restaurant</label>
                <input type="checkbox" id="admin" onChange={handleChange} value="true" />
                <button type="submit">Create User</button>

            </form>
        </div>
    )
}


export default AddUser
