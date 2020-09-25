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
                                        <a href="#" className="btn btn-primary">More</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
				{/* <div className="col-sm-4 mb-3">
                    <div className="card bg-dark">
                        <img className="card-img-top" src="banana_leaf.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title text-light">Banana Leaf</h5>
                            <p className="card-text text-light"><span className='font-weight-bold'>Location: </span>Trichy</p>
                            <p className="card-text text-light"><span className='font-weight-bold'>Price Range: </span>$$$</p>
                            <a href="#" className="btn btn-primary">More</a>
                        </div>
                    </div>
				</div>
				<div className="col-sm-4 mb-3">
                    <div className="card bg-dark">
                        <img className="card-img-top" src="mcdonalds.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title text-light">McDonald's</h5>
                            <p className="card-text text-light"><span className='font-weight-bold'>Location: </span>Coimbatore</p>
                            <p className="card-text text-light"><span className='font-weight-bold'>Price Range: </span>$$$$</p>
                            <a href="#" className="btn btn-primary">More</a>
                        </div>
                    </div>
                </div>
				  <div className="col-sm-4 mb-3">
                    <div className="card bg-dark">
                            <img className="card-img-top" src="kfc.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title text-light">KFC</h5>
                                <p className="card-text text-light"><span className='font-weight-bold'>Location: </span>Coimbatore</p>
                                <p className="card-text text-light"><span className='font-weight-bold'>Price Range: </span>$$$$</p>
                                <a href="#" className="btn btn-primary">More</a>
                            </div>
                        </div>
                </div> */}
                
            </div> 
        </div>
    )
}

export default RestaurantList
