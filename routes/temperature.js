const express = require("express")
const router = express.Router()
var exphbs = require('express-handlebars')
const Temperature = require('../models/Temperature')

// routes
    router.get('/hello', (req, res) => {
        res.render('temperature')
    })

module.exports = router