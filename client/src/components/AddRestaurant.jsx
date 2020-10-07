import React, { useState } from 'react';
import '../css/style.css'
import RestaurantFinder from '../apis/RestaurantFinder'
import { useHistory } from "react-router-dom";

const AddRestaurant = (props) => {

    const history = useHistory();

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [price_range, setPriceRange] = useState(1)
    const [img, setImg] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('img', img)
        formData.append('name', name)
        formData.append('location', location)
        formData.append('price_range', price_range)

        var res = (async function () {

            try {
                const response = await RestaurantFinder.post("/create",formData)
                return response
            } catch (error) {
                
            }
        })()
        if(res) {

            history.push("/")
        }
    }


    return (

        
        <div className='container form'>
            
            <h2>Enter new restaurant details</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data" >
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Enter name" />
                </div>  
                <div className="form-group">
                    <label >Location:</label>
                    <input 
                        value={location} 
                        onChange={e => setLocation(e.target.value)} 
                        type="text" 
                        className="form-control" 
                        id="location" 
                        placeholder="Enter Location"/>
                </div> 
                <div className="form-group">
                    <label >Price Range:</label>
                    <select 
                        value={price_range}
                        onChange={e => {setPriceRange(e.target.value)}}
                        className="custom-select my-1 mr-sm-2">
                        <option disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>

                    </select>
                </div> 
                    <div className="form-group">
                        <label >Choose image</label>
                        <input 
                            type="file" 
                            className="form-control-file" 
                            id="exampleFormControlFile1"
                            onChange={e => {setImg(e.target.files[0])}}
                        />
                    </div> 
                    <button type="submit" className="btn btn-primary mt-3">Add</button>  
            </form>            
        </div>
    )
}

export default  AddRestaurant
