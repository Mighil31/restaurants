import React, {useEffect} from 'react';
import RestaurantFinder from '../apis/RestaurantFinder'

const RestaurantList = (props) => {

    useEffect(() => {

        (async () => {

            try {
                const response = await RestaurantFinder.get("/")
                props.restaurants.setRestaurants(response.data.data.restaurants)
            } catch (error) {
                
            }
        })()

    }, [])

    return (
        <div className='container'>
                <a href='/restaurants/create' className='btn btn-success red'>New Restaurant</a>
                <div className="row">
                    
                    {props.restaurants.restaurants && props.restaurants.restaurants.map(el => {
                        return (

                            <div className="col-sm-4 mt-3" key={el.id}>
                                <div className="card bg-dark">
                                    <img className="card-img-top" src={el.img} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title text-light">{el.name}</h5>
                                        <p className="card-text text-light"><span className='font-weight-bold'>Location: </span>{el.location}</p>
                                        <p className="card-text text-light"><span className='font-weight-bold'>Price Range: </span>{"$".repeat(el.price_range)}</p>
                                        <a href={'/restaurants/'+el.id} className="btn btn-primary">More</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                
            </div> 
        </div>
    )
}

export default RestaurantList
