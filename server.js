const express = require('express');
const app = express();
require('dotenv/config');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

app.use(bodyParser.json());


//import data
const superheroesData = require('./models/superheroesData');

//import ENDPOINTS
const superheroesRoutes = require('./routes/superheroes');
app.use('/superheroes',superheroesRoutes);

app.use(express.json());


//CONNECT TO THE DATABASE 
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true,},()=>
console.log('connected to database'));


//listining to THE SERVER 
app.listen(3000, () =>console.log('server satated'));