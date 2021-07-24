import React, {useState} from 'react'
import UserForm from './UserForm';

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
            <UserForm handleChange={handleChange} handleSubmit={handleSubmit} formState={formState}/>
        </div>
    )
}


export default AddUser
