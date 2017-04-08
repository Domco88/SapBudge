const mongoose = require('mongoose')

// schema
    const temperatureSchema = mongoose.Schema({
        temperature: {type: Number, required: true},
        time: { type: Date, default: Date.now },
        actual: Boolean
    })
    var Temperature = module.exports = mongoose.model('Temperature', temperatureSchema)

// functions
    module.exports.addTemperature = (newTemperature) => {
        newTemperature.save((err) => {
            if (err) throw err
        })
    }
