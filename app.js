// load 
    const express = require('express');
    const fs = require('fs');
    const path = require('path');
    const bodyParser = require('body-parser');
    const router = require('./server/router');
    const tempClientS = require('./server/mqtt/temperatureS')
    const tempClientP = require('./server/mqtt/temperatureP')
    const humClientS = require('./server/mqtt/humidityS')
    const humClientP = require('./server/mqtt/humidityP')
    const test = require('./server/assign')

   
// app variables
    const app = express()
    
    const myLogger = (req, res, next) => {
        console.log("operation : ", req.method, req.url)
        next()
    }

    app.use(myLogger)

    var resolve = file => path.resolve(__dirname, file);
    app.use('/dist', express.static(resolve('./dist')));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use(router)
    //app.use(client)

    app.use('/static', express.static('public'))
    

// rest operations
    app.get('*', function (req, res) {
        var html = fs.readFileSync(resolve('./' + 'index.html'), 'utf-8');
        res.send(html)
    });

// server launch

    app.listen(process.env.PORT || 5000, () => {
        console.log("Magic happens on port 4000")
    });
