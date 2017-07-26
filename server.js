var express = require('express');
var app     = express();
var parser  = require('body-parser');
var db      = require('mongoose');
const usedb = 'mongodb://127.0.0.1:27017/soccer';

var Schema = db.Schema;

var TeamSchema = new Schema({
  name: String,
  country: String
});

var Team = db.model('Team', TeamSchema);

db.connection.openUri(usedb);
db.connection.once('open', function() {
  console.log('Connection established');
  
  Team.find({}, function(err, docs) {
    if (docs) {
      console.log(docs);
    }
  });
})
  .on('error', function() {
    console.error();
  });

var port = process.env.PORT || 3000;

app.listen(port);
console.log('Magic happens on port ' + port);

/*
var express = require('express'),
    app = express();

var router = express.Router();

router.get('/', function(req, res) {
    res.send('Hello world');
});

app.use(router);

app.listen(3000, function() {
    console.log('Node server running on http://localhost:3000/')
});


var db = require('mongoose');
const usedb = 'mongodb://127.0.0.1:27017/soccer';

db.connection.openUri(usedb);
db.connection.once('open', function() {
  console.log('Connection established');
})
  .on('error', function() {
    console.error();
  });
*/