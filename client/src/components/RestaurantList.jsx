import React from 'react'

const RestaurantList = () => {
    return (
        <div className='container'>
                <div className="row">
                    <div className="col-sm-4 mb-3">
                        <div className="card bg-dark">
                            <img className="card-img-top" src="barbeque_nation.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title text-light">Barbeque Nation</h5>
                                <p className="card-text text-light"><span className='font-weight-bold'>Location: </span>Trichy</p>
                                <p className="card-text text-light"><span className='font-weight-bold'>Price Range: </span>$$$$$</p>
                                <a href="#" className="btn btn-primary">More</a>
                            </div>
                        </div>
                    </div>
				<div className="col-sm-4 mb-3">
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
				  </div>
                
            </div>
        </div>
    )
}

export default RestaurantList
