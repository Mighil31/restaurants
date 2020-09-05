require("dotenv").config()

const db = require('./db')
const express = require('express')
const app = express()

app.use(express.json())

// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {

    const results = await db.query("select * from restaurants")
    console.log(results.rows)
    res.json({
        status: "success",
        data: {
            restaurants: ["McDonald's", "Subway"]
        }
    })
})

app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params)

    res.json({
        status: "success",
        data: {
            restaurants: ["McDonald's"]
        }
    })
})

// Create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body)
    res.status(201).json({
        status: "success",
        data: {
            restaurants: ["McDonald's"]
        }
    })
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