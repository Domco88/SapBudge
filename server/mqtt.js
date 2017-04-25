// mqtt.js
    const mqtt = require('mqtt')
    const Models = require('./db')
    const client = module.exports = mqtt.connect('mqtt://10.1.13.2:1883')

    client.on('connect', () => {
        client.subscribe(['/EspTempHum/BMP/Temperature']) // add '/test1',  to testing
    })


    client.on('message', (topic, message) => {
        let newMsg = new Models.Msg({
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

        Models.addMsg (newMsg, (err) => {
            if (err) {
                console.log('Msg error in writing to DB')
            } else {
                console.log('Msg registered')
            }
        })
        console.log('new Msg added to DB at ' + newMsg.time)
    })