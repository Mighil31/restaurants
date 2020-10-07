import React, { useEffect } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import '../css/style.css'

import { useParams, useHistory } from 'react-router-dom'

const RestaurantDetail = (props) => {

    const { id } = useParams()

    const history = useHistory();

    useEffect(() => {


        (async () => {

            try {
                const response = await RestaurantFinder.get("/" + id)
                // console.log(response.data)
                props.restaurant.setRestaurant(response.data.data.restaurants)
            } catch (error) {
                
            }
        })()

    }, [])

    // const [name, setName] = useState(res.data.restaurants.name)
    // const [location, setLocation] = useState(res.data.restaurants.location)
    // const [price_range, setPriceRange] = useState(res.data.restaurants.price_range)
    // const [img, setImg] = useState(res.data.restaurants.img)
    const handleDelete = (idx) => {
        
        var res = (async function () {

            try {
                
                const response = await RestaurantFinder.delete("/"+idx)
                return response
            } catch (error) {
                
            }
        })()

        if(res) {

            history.push("/")
        }
    }

    
    return (
        <div className='bg-dark row no-gutters pb-5'>
            {props.restaurant.restaurant && 

                <div className='mt-5 pt-5 container bg-light'>

                    <h2 className='ml-5 text-center text-dark'>{props.restaurant.restaurant.name}</h2>
                    <img className="mt-3 detail-image rounded mx-auto d-block" src={'/'+props.restaurant.restaurant.img}  />
                    <h4 className='mt-5 ml-5 text-dark'>Location: {props.restaurant.restaurant.location}</h4>
                    <h4 className='mt-3 ml-5 text-dark'>Price Range: {"$".repeat(props.restaurant.restaurant.price_range)}</h4>


                    <div className="row mt-5 mx-auto text-center">
                        <div className="col">
                            <button onClick={() => handleDelete(props.restaurant.restaurant.id)} type="button" className="btn btn-danger">
                            Delete
                            </button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-warning">
                            Update
                            </button>
                        </div>
                    </div>
                </div>
                                
            }
        </div>
    )
}

export default RestaurantDetail
