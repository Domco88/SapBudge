var express = require('express');
var router = express.Router();
var users = require('./user').items;
var db = require('./db');


router.get('/api/temperature', function(req, res){
    db.Temperature
        .findOne()
        .sort('-time')
        .exec( function(err, docs){
            if (err) {
                console.log('articleList err: '+ err);
                return
            }
            res.json(docs)
         })
    }
);

router.get('/api/mqtt', function(req, res){
    db.Msg
        .findOne()
        .sort('-time')
        .exec( function(err, docs){
            if (err) {
                console.log('mqtt err: '+ err);
                return
            }
            res.json(docs)
         })
    }
);



module.exports = router