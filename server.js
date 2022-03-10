const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

//MiddleWare
app.use(cors()) 
app.options('*',cors())
app.use(bodyParser.json()) // JSON
app.use(morgan('tiny')) //HTTP Status

//Router
const userRouter = require('./router/users')

//API
app.use('/', userRouter)

//Connect DB
mongoose.connect('mongodb://localhost/ex',{
    useNewUrlParser: true,
    UseUnifiedTopology: true
})
.then(() => {
    console.log("Database Connected");
})
.catch((err) => {
    console.log(err);
})


app.listen(3000, () => {
    console.log("server running at port 3000");
})
