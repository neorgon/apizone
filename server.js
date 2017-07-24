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
