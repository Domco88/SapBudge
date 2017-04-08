const express = require("express")
const router = express.Router()
const Temperature = require('../models/Temperature')

const myLogger = (req, res, next) => {
    console.log("operation : ", req.method, req.url)
    next()
}
// routes
    router.get('/hello', (req, res) => {
        res.render('temperature/hello')
    })
    // /temperature/add
    router.get('/form', (req, res) => {
        res.render('temperature/form')
    })

    router.post('/add', (req, res, next) => {
        console.log(req.body.temperature)
        let newTemperature = new Temperature({
            temperature: req.body.temperature,
            actual: req.body.actual
        })

        Temperature.addTemperature(newTemperature, (err) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to register user' });
            } else {
                res.json({ success: true, msg: 'User registered' });
            }
        })
    })


module.exports = router