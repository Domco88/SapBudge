// mqtt.js
    const mqtt = require('mqtt')
    const client = module.exports = mqtt.connect('mqtt://10.1.13.2:1883')

    client.on('connect', () => {
        client.subscribe(['/EspTempHum/BMP/Temperature']) // add '/test1',  to testing
    })
