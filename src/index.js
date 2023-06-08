// importing packages and libraries
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");



const app = express();// calling express
dotenv.config();



const route = require("./routes/routes") // routing

// database connection
mongoose.connect(process.env.MONGO_URI).then(
    console.log('mongodb is connnected')
).catch(
    err => { console.error(err.message) }
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', route) //routing


//starting server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

