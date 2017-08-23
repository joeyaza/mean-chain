var mongoose = require('mongoose');


var BlockSchema = mongoose.Schema({
  previousHash: String,
  hash: String,
  data: String,
  timestamp: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Block', BlockSchema);

