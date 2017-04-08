const mongoose = require('mongoose')

const temperatureSchema = mongoose.Schema({
    temperature: {type: Number, required: true},
    time: { type: Date, default: Date.now },
    actual: Boolean
})
var Temperature = module.exports = mongoose.model('Temperature', temperatureSchema)

// module.exports.addAppoitment = (newAppoitment) => {
//     newAppoitment.save((err) => {
//         if (err) throw err
//     })
// }
