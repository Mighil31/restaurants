require("dotenv").config()

const db = require('./db')
const express = require('express')
const app = express()

app.use(express.json())

// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {

    try {
        
        const results = await db.query("select * from restaurants")
        console.log(results.rows)
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
    console.log(req.params)
    
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
    console.log(req.body)

    try {
        const results = await db.query("insert into restaurants (name, location, price_range) values ($1, $2, $3) returning *", [req.body.name, 
            req.body.location, req.body.price_range])

        console.log(results)
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
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.status(200).json({
        status: "success",
        data: {
            restaurants: ["McDonald's"]
        }
    })
})

// Delete a restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "success" 
    })
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
