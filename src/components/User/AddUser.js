import React, {useState} from 'react'
import UserForm from './UserForm';

const AddUser = ({createUser, userState, setUserState, findUser}) => {
    const initialState = {firstName: '', lastName: '', username:'', admin: false}
    const [formState, setFormState] = useState(initialState);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState)
        const newUser = {
            firstName: formState.firstName, 
            lastName: formState.lastName, 
            admin: formState.admin,
            username: formState.username
        }
        setFormState(formState, newUser)
        createUser(formState)
        setUserState(formState)
        setFormState(initialState)
        console.log(userState)
        findUser()
        }
    
    function handleChange(event){
        console.log(formState)
        setFormState({...formState, [event.target.id]: event.target.value})
    };

    return (
        <div>
            <h2>Create User Component</h2>
            <UserForm handleChange={handleChange} handleSubmit={handleSubmit} formState={formState}/>
        </div>
    )
}


export default AddUser
