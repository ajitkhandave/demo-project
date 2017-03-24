var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: {type:String, required: true},
  last-name: {type:String, required: true},
  email: {type:String, required: true},
  number: {type:String, required: true}
});
module.exports = mongoose.model('Overview-info', schema);
