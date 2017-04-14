const express = require("express")
const router = express.Router()
const Msg = require('../models/Msg')
const mqttClient = require('../mqtt/mqtt')




mqttClient.on('message', (topic, message) => {
        
        let newMsg = new Msg({
            msg: message
         })

        //   Msg.addMsg(newMsg, (err) => {
        //       if (err) {
        //           console.log('Msg error in writing to DB')
        //       } else {
        //           console.log('Msg registered')
        //       }
        //   })
        //   console.log('new Msg added to DB at ' + newMsg.time)

    })

// routes
    router.get('/', (req, res) => {
        Msg
        .findOne()
        .sort('-time')
        .exec(function(err, message) { 
            console.log(message)
            res.render("mqtt/latest", {message}) 
        });
    })


module.exports = router