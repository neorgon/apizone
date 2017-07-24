var db     = require('mongoose');
var Schema = db.Schema;

var TeamSchema = new Schema({
  name: String,
  country: String
});

module.exports = db.model('Team', TeamSchema);
