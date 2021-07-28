import React from 'react'
import {useState} from 'react'
import UserForm from './UserForm'

const UpdateUser = ({updateUser, userState, deleteUser}) => {
    
    const initialState = {firstName: userState.firstName, lastName: '', admin: ''}
    const [formState, setFormState] = useState(userState)

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
        const newInfo = {
            name: {
                first: formState.firstName, 
                last: formState.lastName
            },
            admin: formState.admin
        };
        setFormState(formState, newInfo)
        updateUser(newInfo)
        setFormState(initialState)
    }

    function handleChange(event){
        console.log(formState)
        setFormState({...formState, [event.target.id]: event.target.value})
    }
    return (
        <div>
            <h2>My profile</h2>
            <UserForm handleChange={handleChange} handleSubmit={handleSubmit} formState={formState} />
            <form onSubmit={deleteUser}>
                <input type="submit" value='Delete Account' />
            </form>

        </div>
    )
}

export default UpdateUser
