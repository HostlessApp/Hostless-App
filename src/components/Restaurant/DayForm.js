import React from 'react'
// import { useState } from 'react'

const DayForm = ({ name, handleChange, formState }) => {

    return (
        <div className="adminDay">
            <h2 className="alignCenter">{name}</h2>
            {/* <label className="dayHolder" htmlFor={formState[name].open}>Open */}
            <input
                className = "timeForm"
                id={`${name}`}
                type="text"
                onChange={(event) => { handleChange(event, "open") }}
                placeholder="Opens At:"
                defaultValue={formState[name].open}
            />
            {/* </label> */}
            {/* <label className="dayHolder padding-top" htmlFor={formState[name].close}>Close */}
            <input
                className = "timeForm"
                id={`${name}`}
                type="text"
                onChange={(event) => { handleChange(event, "close") }}
                placeholder="Closes At:"
                defaultValue={formState[name].close}
            />
            {/* </label> */}
            <p className="isOpen">closed  <input className="checkbox" id={`${name}`} type="checkbox" value={true} onChange = {(event) => { handleChange(event, "isOpen") }}></input></p>
        </div>
    )
}

export default DayForm
