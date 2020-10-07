import React, { useState } from 'react'
import RestaurantDetail from '../components/RestaurantDetail'

const RestaurantDetailPage = () => {

    const [restaurant, setRestaurant] = useState([])
    

    return (
        <div>
        <RestaurantDetail restaurant={{ restaurant, setRestaurant }}/>
        </div>
    )
}

export default RestaurantDetailPage
