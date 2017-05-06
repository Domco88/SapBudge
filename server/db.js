// init   
    const mongoose = require('mongoose')
    const db = mongoose.connection 

    mongoose.connect('mongodb://localhost:27017/budge')

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('we are connected to MongoDB')
    });


// schema and models
    // const temperatureSchema = mongoose.Schema({
    //     temperature: {type: Number, required: true},
    //     time: { type: Date, default: Date.now },
    //     actual: Boolean
    // })

     const temperatureSprchaSchema = mongoose.Schema({
        tempS: {type: Number, required: true},
        time: { type: Date, default: Date.now }
    })

     const temperaturePrackaSchema = mongoose.Schema({
        tempP: {type: Number, required: true},
        time: { type: Date, default: Date.now }
    })

    const humiditySprchaSchema = mongoose.Schema({
        humS: {type: Number, required: true}, 
        time: { type: Date, default: Date.now}
    })

    const humidityPrackaSchema = mongoose.Schema({
        humP: {type: Number, required: true}, 
        time: { type: Date, default: Date.now}
    })


    const Models = {
        TemperatureS: mongoose.model('TemperatureS', temperatureSprchaSchema),
        TemperatureP: mongoose.model('TemperatureP', temperaturePrackaSchema),
        HumidityS: mongoose.model('HumidityS', humiditySprchaSchema),
        HumidityP: mongoose.model('HumidityP', humidityPrackaSchema)
    }

module.exports = Models
// functions
   module.exports.addTemperatureS = (newTempS) => {
        newTempS.save((err) => {
            if (err) throw err
        })
    }

      module.exports.addTemperatureP = (newTempP) => {
        newTempP.save((err) => {
            if (err) throw err
        })
    }

    module.exports.addHumidityS = ( newHumS) => {
        newHumS.save((err) => {
            if (err) throw err
        })
    }

    module.exports.addHumidityP = ( newHumP) => {
        newHumP.save((err) => {
            if (err) throw err
        })
    }
