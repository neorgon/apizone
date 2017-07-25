var express = require('express');
var app     = express();
var parser  = require('body-parser');
var db      = require('mongoose');
const usedb = 'mongodb://127.0.0.1:27017/soccer';

db.connection.openUri(usedb);
db.connection.once('open', function() {
  console.log('Connection established');
})
  .on('error', function() {
    console.error();
  });

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

var port   = process.env.PORT || 3000;
var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
});

var Team = require('./app/models/team');

router.route('/teams')
  .post(function(req, res) {
    var team = new Team();
    team.name = req.body.name;
    team.country = req.body.country;

    team.save(function(err) {
      if (err) {
        res.send(err);
      }

      res.json({ message: 'Team created!' });
    });
  });

router.route('/list/teams')
  .get(function(req, res) {
    Team.find(function(err, teams) {
      if (err) {
        res.send(err);
      }

      res.json(teams);
  });
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
