// mqtt.js    
    const mqtt = require('mqtt')
    const Models = require('../db')
    const client = module.exports = mqtt.connect('mqtt://10.1.13.2:1883')

    client.on('connect', () => {
        client.subscribe(['/EspSprcha/SprchaDHT/Humidity']) // add '/test1',  to testing
        console.log('connected to mqtt humidityS Broker')
    })


    client.on('message', (topic, message) => {
        let newHumS = new Models.HumidityS({
            humS: message
        })

        //   Msg.addMsg(newMsg, (err) => {
        //       if (err) {
        //           console.log('Msg error in writing to DB')
        //       } else {
        //           console.log('Msg registered')
        //       }
        //   })
        //   console.log('new Msg added to DB at ' + newMsg.time)

        Models.addHumidityS (newHumS, (err) => {
            if (err) {
                console.log('Msg error in writing to DB')
            } else {
                console.log('Msg registered')
            }
        })
        console.log('new HumidityS added to DB at ' + newHumS.time)
    })