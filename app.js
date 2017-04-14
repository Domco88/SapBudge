// load 
    const express = require("express")
    const mongoose = require('mongoose')
    const expressHbs  = require('express-handlebars')
    const bodyParser = require("body-parser")
    const mqtt = require('mqtt')
   
// app variables
    const app = express()
    const port    =   process.env.PORT || 4000;
    const db = mongoose.connection 
    
    const myLogger = (req, res, next) => {
        console.log("operation : ", req.method, req.url)
        next()
    }

    app.use(myLogger)

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    
    
// Router
    const router = express.Router()
    const temperatures = require('./routes/temperature')
    const msgs = require('./routes/msg')

    app.use('/', express.static('public'))
    app.get('/', (req, res) => {
        res.render('index.html')
    })

    app.use('/main', router)
    app.use('/temperature', temperatures)
    app.use('/mqtt', msgs)
// mongoDB
    mongoose.connect('mongodb://localhost:27017/budge')
    mongoose.Promise = global.Promise;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('we are connected')
    });

// expressHbs
    app.engine('hbs', expressHbs ({extname:'hbs', defaultLayout: 'main.hbs' }));
    app.set('view engine', 'hbs');    



// rest operations
     router.get('/home', (req, res) => {
         res.render('main/home')
     })

     router.get('/', function (req, res) {
         res.send('im the home page!');
     });

     router.get('/about', function (req, res) {
         res.send('im the about page!');
     });


// server launch
    app.listen(port)
    console.log('Magic happens on port ' + port)