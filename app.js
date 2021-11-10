const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongodb = require('mongodb');

// route imports
const todoRoutes = require('./routes/todoRoutes');

const { PORT } = process.env || 4000 
const { WELCOME_MESSAGE, DATABASE_URL } = process.env


// declare app isntance
const app = express();

// load middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

// load routes to app
app.use('/todos', todoRoutes)

//specify the route for admindashboard
app.get

//use static folder for all css files
app.use("/static", express.static(__dirname  + "/static"));
app.set("view engine", "ejs") //default view engine is ejs

// var MongoClient = require("mongodb").MongoClient;
// MongoClient.connect("mongodb://localhost:27017", {useNewUrlParser: true}, function (error, client){
//     var blog = client.db("blog");
//     console.log("DB Connected");
// })

// spin up the server 
mongoose.connect(DATABASE_URL).then(() => {
    // successful connection
    app.listen(PORT, ()=> {
        let message = `${WELCOME_MESSAGE} http://localhost:${PORT}`
        console.log(message)
    })
}).catch(error => {
    console.error("Failed to start the server due to : ",error)
})

//specify the route for admindashboard
app.use("/admin/dashborad", function (req , res){
    res.render("admin/dashboard");
})

app.get("/", function (req, res){
    res.send("Hello Word")
})



// the redenring html template.
