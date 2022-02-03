const express = require('express');
const db = require("./config/connection")

const app = express();
const PORT = process.env.PORT || 3000;
// Requiring our models for syncing
const  User = require('./models/User');
const  Joke = require('./models/Joke');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/users",(req,res)=>{
    User.findAll().then(users=>{
        res.json(users)
    })
})
app.get("/api/jokes",(req,res)=>{
    Joke.findAll().then(users=>{
        res.json(users)
    })
})

db.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});