// mqtt.js    
    const mqtt = require('mqtt')
    const Models = require('../db')
    const client = module.exports = mqtt.connect('mqtt://10.1.13.2:1883')

    client.on('connect', () => {
        client.subscribe(['/EspSprcha/PrackaDHT/Humidity']) // add '/test1',  to testing
        console.log('connected to mqtt humidityP Broker')
    })


    client.on('message', (topic, message) => {
        let newHumP = new Models.HumidityP({
            humP: message
        })

        //   Msg.addMsg(newMsg, (err) => {
        //       if (err) {
        //           console.log('Msg error in writing to DB')
        //       } else {
        //           console.log('Msg registered')
        //       }
        //   })
        //   console.log('new Msg added to DB at ' + newMsg.time)

        Models.addHumidityP (newHumP, (err) => {
            if (err) {
                console.log('Msg error in writing to DB')
            } else {
                console.log('Msg registered')
            }
        })
        console.log('new HumidityP added to DB at ' + newHumP.time)
    })