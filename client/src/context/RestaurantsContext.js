import React, { useState, createContext } from 'react';


export const RestaurantsContext = createContext();

export const restaurantsContextProvider = props => {

    const [restaurants, setRestaurants] = useState([])

    return (
        <RestaurantsContext.Provider value={{restaurants, setRestaurants}}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}

