const mongoose = require('mongoose')

// schema
    const msgSchema = mongoose.Schema({
        msg: {type: Number, required: true},
        time: { type: Date, default: Date.now },
    })
    var Msg = module.exports = mongoose.model('Msg', msgSchema)

// functions
    module.exports.addMsg = (newMsg) => {
        newMsg.save((err) => {
            if (err) throw err
        })
    }