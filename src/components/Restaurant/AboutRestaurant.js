import React from "react";
import { useState } from "react";

const AboutRestaurant = ({ restaurant, setRestaurant }) => {
  const initialState = {
    restaurant: "",
    description: "About My Restaurant",
    street: "",
    city: "",
    state: "",
    zip: "",
  };
  const [formState, setFormState] = useState(initialState);
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
    const addressObj = {
      street: formState.street,
      city: formState.city,
      state: formState.state,
      zip: formState.zip,
    };
    setFormState(formState, addressObj);
    let newState = restaurant;
    newState.about = formState;
    setRestaurant(newState);
    console.log(restaurant)
    setFormState(initialState);
  }
  function handleChange(event) {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  }
  return (
    <div className="aboutRestaurant">
      <form onSubmit={handleSubmit}>
        <label className="ph-restaurant" htmlFor="restaurant">
          Restaurant Name
        </label>
        <input
          id="restaurant"
          type="text"
          onChange={handleChange}
          value={formState.restaurant}
        />
        <textarea
          id="description"
          onChange={handleChange}
          defaultValue={formState.description}
        ></textarea>
        <div className="adrs">
          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            onChange={handleChange}
            value={formState.street}
          />
        </div>
        <div className="adrs">
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            onChange={handleChange}
            value={formState.city}
          />
        </div>
        <div className="adrs">
          <label htmlFor="state">State</label>
          <input
            id="state"
            type="text"
            onChange={handleChange}
            value={formState.state}
          />
        </div>
        <div className="adrs">
          <label htmlFor="zip">Zip Code</label>
          <input
            id="zip"
            type="text"
            onChange={handleChange}
            value={formState.zip}
          />
        </div>
        <button type="submit">Set</button>
      </form>
    </div>
  );
};

export default AboutRestaurant;
