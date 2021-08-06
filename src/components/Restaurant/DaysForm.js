import React from 'react'
import DayForm from './DayForm';
import { useState } from 'react';

const DaysForm = ({restaurant, setRestaurant}) => {
    const initialState = {
        monday: {
            open: '',
            close: '',
            isOpen: true
        },
        tuesday: {
            open: '',
            close: '',
            isOpen: true
        },
        wednesday: {
            open: '',
            close: '',
            isOpen: true
        },
        thursday: {
            open: '',
            close: '',
            isOpen: true
        },
        friday: {
            open: '',
            close: '',
            isOpen: true
        },
        saturday: {
            open: '',
            close: '',
            isOpen: true
        },
        sunday: {
            open: '',
            close: '',
            isOpen: true
        },
    };
    const [formState, setFormState] = useState(initialState);

    function handleSubmit(event) {
        event.preventDefault();
        setFormState(formState)
        let newState = restaurant;
        console.log(newState)
        newState.hours = formState;
        setRestaurant(newState)
        setFormState(initialState)
    }

    function handleChange(event, prop) {
        let newState = formState;
        if (prop === "isOpen") {
            if (event.target.value === "on") {
                newState[event.target.id][prop] = true
            } else {
                newState[event.target.id][prop] = false
            }
        } else {
            newState[event.target.id][prop] = event.target.value
            if (newState[event.target.id][prop].length === 1) {
                console.log(event.target.value)
                if (event.target.value > 1) {
                    let change = newState[event.target.id][prop] += ':';
                    setFormState({...formState, [newState[event.target.id][prop]]: change})
                }
            } else if (newState[event.target.id][prop].length === 1 && newState[event.target.id][prop][1] !== ':') {
                newState[event.target.id][prop] += ':'
                setFormState(newState)
            }
        }
        setFormState(newState)
    }

    console.log(formState)
    return (
        <div className="settingHours">
            <form onSubmit={handleSubmit}>
                <DayForm handleChange={handleChange} formState={formState} name="monday" />
                <DayForm handleChange={handleChange} formState={formState} name="tuesday" />
                <DayForm handleChange={handleChange} formState={formState} name="wednesday" />
                <DayForm handleChange={handleChange} formState={formState} name="thursday" />
                <DayForm handleChange={handleChange} formState={formState} name="friday" />
                <DayForm handleChange={handleChange} formState={formState} name="saturday" />
                <DayForm handleChange={handleChange} formState={formState} name="sunday" />
                <button className = "confirmHours" type="submit">Confirm Hours</button>
            </form>
        </div>
    )
}

export default DaysForm
