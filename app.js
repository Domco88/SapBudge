// load 
    const express = require("express")
    const mongoose = require('mongoose')
    const exphbs = require('express-handlebars')
   
// app variables
    const app = express()
    const port    =   process.env.PORT || 4000;
    const db = mongoose.connection 
    
    const myLogger = (req, res, next) => {
        console.log("operation : ", req.method, req.url)
        next()
    }
    
// Router
    const router = express.Router()
    const temperatures = require('./routes/temperature')

    app.use('/main', router)
    app.use('/temperature', temperatures)
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
     router.get('/home', (req, res) => {
         res.render('home')
     })

     router.get('/', function (req, res) {
         res.send('im the home page!');
     });

     // about page route (http://localhost:8080/about)
     router.get('/about', function (req, res) {
         res.send('im the about page!');
     });


// server launch
    app.listen(port)
    console.log('Magic happens on port ' + port)