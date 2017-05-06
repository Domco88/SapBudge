// mqtt.js    
    const mqtt = require('mqtt')
    const Models = require('../db')
    const client = module.exports = mqtt.connect('mqtt://10.1.13.2:1883')

    client.on('connect', () => {
        client.subscribe(['/EspSprcha/SprchaDHT/Temperature']) // add '/test1',  to testing
        console.log('connected to temperatureS mqtt Broker')
    })


    client.on('message', (topic, message) => {
        let newTempS = new Models.TemperatureS({
            tempS: message
        })

        //   Msg.addMsg(newMsg, (err) => {
        //       if (err) {
        //           console.log('Msg error in writing to DB')
        //       } else {
        //           console.log('Msg registered')
        //       }
        //   })
        //   console.log('new Msg added to DB at ' + newMsg.time)

        Models.addTemperatureS (newTempS, (err) => {
            if (err) {
                console.log('Msg error in writing to DB')
            } else {
                console.log('Msg registered')
            }
        })
        console.log('new MsgS added to DB at ' + newTempS.time)
    })