var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
var assert = require('assert');
var Message = require('../models/message');
var url = 'mongodb://localhost:27017/info';
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works in api route');
});

router.post('/message', function(req, res, next){

  var message = new Message({
    content: req.body.content
  });
  message.save(function(err, result){
    if(err){
      return res.status(500).json({
          message:'Error while saving data'
      });
    }
    res.status(201).json({
      message:'Saved data successfully'
    });
  });
});
router.post('/insert', function(req, res, next){
    var item = {
      name : req.body.title,
      lastName: req.body.lname,
      mail: req.body.mail,
      number: req.body
    };
    mongo.connect('url', function(err, db){
      assert.equal(null, err);
      db.collection('user-data').insertOne(item, function(err, result){
        assert.equal(null, err);
        console.log('Item Inserted');
        db.close();
      })
    });
});

router.post('/overview', function(req, res, next){
    console.log("Node: " + JSON.stringify(req.body));
    var item = {
      name : req.body.ovrName,
      lastName: req.body.ovrLname,
      mail: req.body.ovrMail,
      number: req.body.ovrNumber
    };
    mongo.connect('url', function(err, db){
      assert.equal(null, err);
      db.collection('user-data').insertOne(item, function(err, result){
        assert.equal(null, err);
        console.log('Item Inserted');
        db.close();
      })
    });
});

router.post('/get-data', function(req, res, next){
    var resultArray= [];

    mongo.connect('url', function(err, db){
      assert.equal(null, err);
      var cursor= db.collection('user-data').find();
      cursor.forEach(function(doc, err){
        assert.equal(null, err);
        resultArray.push(doc);
      },function(){
        db.close();
        res.render('index', {items: resultArray});
      });
    });
});





router.get('/messages', function(req, res, next) {
    Message.find(function(err, messages) {
        if (err) {
            return res.status(500).json({
                message: 'Error while fetching data!'
            });
        }
        res.status(200).json(messages);
    });
});
module.exports = router;
