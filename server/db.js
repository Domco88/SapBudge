// init   
    const mongoose = require('mongoose')
    const db = mongoose.connection 

    mongoose.connect('mongodb://localhost:27017/budge')

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('we are connected')
    });

// schema and models
    const temperatureSchema = mongoose.Schema({
        temperature: {type: Number, required: true},
        time: { type: Date, default: Date.now },
        actual: Boolean
    })

     const msgSchema = mongoose.Schema({
        msg: {type: Number, required: true},
        time: { type: Date, default: Date.now },
    })


    const Models = {
        Msg:  mongoose.model('Msg', msgSchema),
        Temperature: mongoose.model('Temperature', temperatureSchema)
    }

module.exports = Models
// functions
   module.exports.addTemperature = (newTemperature) => {
        newTemperature.save((err) => {
            if (err) throw err
        })
    }

    module.exports.addMsg = (newMsg) => {
        newMsg.save((err) => {
            if (err) throw err
        })
    }
