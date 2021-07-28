import React from 'react'

const SearchParams = () => {
    return (
        <div>
            <form id='searchParams'>
                <label htmlFor="partySize">How many seats?</label>
                <input type="number" name="partySize" id="" />
                <label htmlFor="date">What date?</label>
                <input type="date" name="date" id="" />
                <label htmlFor="time">At what time?</label>
                <input type="time" name="time" id="" />
            </form>
        </div>
    )
}

export default SearchParams