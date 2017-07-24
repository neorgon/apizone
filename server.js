var db = require('mongoose');
const usedb = 'mongodb://127.0.0.1:27017/soccer';

db.connection.openUri(usedb);
db.connection.once('open', function() {
  console.log('Connection established');
})
  .on('error', function() {
    console.error();
  });

/*
var mongodb = require('mongodb');
var server = new mongodb.Server("127.0.0.1", 27017, {});
new mongodb.Db('soccer', server, {}).open(function (error, client) {
  if (error) throw error;
  var team = new mongodb.Collection(client, 'team');
  collection.find({}, {limit:10}).toArray(function(err, docs) {
    console.dir(docs);
  });
});
*/
