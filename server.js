// load  ENV FILE CONFIG
require("dotenv").config()

// init express
const express = require('express')
const cors = require("cors")
const multer = require('multer')
const joi = require('joi')



// set port dari .env / ENV_PORT
const PORT = process.env.ENV_PORT
const URL = process.env.ENV_URL

// init variable express
var app = express()

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())




app.use(express.static(__dirname));


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

// MENDEFINISIKAN URL DEFAULT
const apiRouter = require(`${__dirname}/api/v1/routes`)
app.use(URL,apiRouter)

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}${URL}`) //http://localhost:6000/api/v1
})
