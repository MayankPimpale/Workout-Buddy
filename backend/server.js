require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')


//express app
const app = express()
const userRoutes = require('./routes/user')
//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//Routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
    app.listen(process.env.PORT, () => {
    console.log('connected to db & listening on port', process.env.PORT)
})
    })
    .catch((err) => {
        console.log(err)
    })

