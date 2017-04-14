// mqtt.js
    const mqtt = require('mqtt')
    const client = module.exports = mqtt.connect('mqtt://10.1.13.2:1883')

    client.on('connect', () => {
        client.subscribe(['/EspTempHum/BMP/Temperature']) // add '/test1',  to testing
    })
<<<<<<< HEAD
=======

    //   basic tested conection console.log
    // client.on('message', (topic, message) => {
    //     console.log(message.toString())
    //     // client.end()
    // })
>>>>>>> 52c9dfd1dac5e080e7acde83529c2f02cb5bea17
