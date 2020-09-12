require("dotenv").config()
const cors = require("cors")

const db = require('./db')
const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())

// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {

    try {
        
        const results = await db.query("select * from restaurants")
        res.json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows
            }
        })
    } catch (error) {
        console.log(error)
    }

    
})

// Get one restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    
    try {
        const results = await db.query("select * from restaurants where id=$1", [req.params.id])
        res.json({
            status: "success",
            data: {
                restaurants: results.rows[0]
            },
        })
    } catch (error) {
        console.log(error)
    }

})

// Create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {

    try {
        const results = await db.query("insert into restaurants (name, location, price_range, img) values ($1, $2, $3, $4) returning *", [req.body.name, 
            req.body.location, req.body.price_range, req.body.img])

        res.status(201).json({
            status: "success",
            data: {
                restaurants: results.rows[0]
            }
        })
        
    } catch (error) {
        console.log(error)
    }
    
})

// Update restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {

    try {
        const results = await db.query("update restaurants set name=$1, location=$2, price_range=$3 where id=$4 returning *", [req.body.name, 
        req.body.location, req.body.price_range, req.params.id])
        console.log(results)
        res.status(200).json({
            status: "success",
            data: {
                restaurants: results.rows[0]
            }
        })
    } catch (error) {
        console.log(error)
    }

})

// Delete a restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {

    try {
        const results = await db.query("delete from restaurants where id=$1", [req.params.id])
        res.status(204).json({
            status: "success" 
        })
    } catch (error) {
        console.log(error)
    }

})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
