import React, { useState } from 'react'
import Header from '../components/Header'
import AddRestaurant from '../components/AddRestaurant'
import RestaurantList from '../components/RestaurantList'

const Home = () => {

    const [restaurants, setRestaurants] = useState([])

    return (
        <div>
            <Header />
            <AddRestaurant />
            <RestaurantList restaurants={{ restaurants, setRestaurants }} />
        </div>
    )
}

export default Home
