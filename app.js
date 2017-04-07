// load 
    const express = require("express")
    const mongoose = require('mongoose')
    const exphbs = require('express-handlebars')
   
// app variables
    const app = express()
    const db = mongoose.connection

    
    const myLogger = function (req, res, next) {
        console.log("passed : ", req.originalUrl, req.method)
        next()
    }

// mongoDB

    mongoose.connect('mongodb://localhost:27017/budge')
    mongoose.Promise = global.Promise;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('we are connected')
    });

// app.setup
    app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');

// app.use
     app.use(myLogger)

// rest operations

