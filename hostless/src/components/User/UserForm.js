import React from 'react'

const UserForm = ({handleChange, handleSubmit, formState}) => {



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" onChange={handleChange} value={formState.firstName} />
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" onChange={handleChange} value={formState.lastName} />
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" onChange={handleChange} value={formState.username} />
                <label htmlFor="admin">I am here to post my restaurant</label>
                <input type="checkbox" id="admin" onChange={handleChange} value="true" />
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default UserForm
