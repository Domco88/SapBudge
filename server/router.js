var express = require('express');
var router = express.Router();
var db = require('./db');
const seed = require('./db.seed')


const tempsProjection = {
    __v: false,
    _id: false,
    actual: false
}

var cutoff = new Date();
cutoff.setDate(cutoff.getDate()-1);

router.get('/api/temp', function(req, res){
    db.Temperature
        .findOne()
        .sort('-time')
        .exec( function(err, docs){
            if (err) {
                console.log('tempList err: '+ err);
                return
            }
            res.json(docs)
         })
    }
);

// router.get('/api/temperature', function(req, res){
//     db.Temperature
//         // .find( {'actual': true}, tempsProjection)
//         .find( {'actual': true} )
//         .sort({ time: -1 })
//         .limit(10)
//         .select({ time: 1, temperature: 1, _id: 0 })
//         .exec( function(err, docs){
//             if (err) {
//                 console.log('tempsList err: '+ err);
//                 return
//             }
//             res.json(docs)
//          })
//     }
// );

router.get('/api/temperatureS', function(req, res){
    db.TemperatureS
        // .find( {'actual': true}, tempsProjection)
        .find({time: {$gt: cutoff}}  )
        .sort({ time: -1 })
        .select({ time: 1, tempS: 1, _id: 0 })
        .exec( function(err, docs){
            if (err) {
                console.log('tempsList err: '+ err);
                return
            }
            res.json(docs)
         })
    }
);

router.get('/api/humidityS', function(req, res){
    db.HumidityS
        // .find( {'actual': true}, tempsProjection)
        .find({time: {$gt: cutoff}}  )
        .sort({ time: -1 })
        .select({ time: 1, humS: 1, _id: 0 })
        .exec( function(err, docs){
            if (err) {
                console.log('humidityList err: '+ err);
                return
            }
            res.json(docs)
         })
    }
);

router.get('/api/temperatureP', function(req, res){
    db.TemperatureP
        // .find( {'actual': true}, tempsProjection)
        .find({time: {$gt: cutoff}}  )
        .sort({ time: -1 })
        .select({ time: 1, tempP: 1, _id: 0 })
        .exec( function(err, docs){
            if (err) {
                console.log('tempsList err: '+ err);
                return
            }
            res.json(docs)
         })
    }
);

router.get('/api/humidityP', function(req, res){
    db.HumidityP
        // .find( {'actual': true}, tempsProjection)
        .find({time: {$gt: cutoff}}  )
        .sort({ time: -1 })
        .select({ time: 1, humP: 1, _id: 0 })
        .exec( function(err, docs){
            if (err) {
                console.log('humidityList err: '+ err);
                return
            }
            res.json(docs)
         })
    }
);





// router.get('/api/temps', (req, res) => {
//     res.send(seed)
// })



module.exports = router