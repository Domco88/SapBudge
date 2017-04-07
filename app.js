// load 
    var express = require("express")
    const mongoose = require('mongoose')
   
// app setup
    const app = express()

// mongoDB
    const db = mongoose.connection

    mongoose.connect('mongodb://localhost:27017/test')
    mongoose.Promise = global.Promise;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('we are connected')
    });

// rest operations
    app.get('/' (req, res) => {
        res.send()
    })
