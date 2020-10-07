import React, { useState } from 'react'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'

const Home = () => {

    const [restaurants, setRestaurants] = useState([])

    return (
        <div>
            <Header />
            <RestaurantList restaurants={{ restaurants, setRestaurants }} />
        </div>
    )
}

export default Home
