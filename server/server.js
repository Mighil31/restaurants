require("dotenv").config()
const cors = require("cors")

const db = require('./db')
const express = require('express')
const app = express()

const multer = require('multer');
var path = require("path");

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../client/public')
    },
    filename: (req, file, cb) => {
        cb(
            null,
            file.originalname
      )
    }
  })

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true)
    } else {
        cb(new Error('File formate should be PNG, JPG, or JPEG'))
    }
}

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

// sudo kill -9 $(sudo lsof -t -i:8000)

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


// Post Create a restaurant
app.post("/api/v1/restaurants/create",
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('img'),
    (req, res) => {

    ( async () => {
       
        try {
            if(req.file)
            {
                const results = await db.query("insert into restaurants (name, location, price_range, img) values ($1, $2, $3, $4) returning *", [req.body.name, 
                req.body.location, req.body.price_range, ... req.file ? [req.file.filename] : [null]])
    
                res.status(201).json({
                    status: "success",
                    data: {
                        restaurants: results.rows[0]
                    }
                })
            } else {
                console.log("fuck")
            }
            
        } catch (error) {
            console.log(error)
        }
    })()
    // console.log(req)
    
})

// Update restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {

    try {
        const results = await db.query("update restaurants set name=$1, location=$2, price_range=$3 where id=$4 returning *", [req.body.name, 
        req.body.location, req.body.price_range, req.params.id])
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
