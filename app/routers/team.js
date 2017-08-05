var express = require('express');
var router  = express.Router();
var Team    = require('../models/team');

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
});

router.route('/new/team')
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
      
      res.status(200).send(teams);
    });
  });

module.exports = router;