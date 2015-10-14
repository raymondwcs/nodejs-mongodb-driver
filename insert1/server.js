var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var insertDocument = function(db, callback) {
   db.collection('books').insertOne( {
	"name" : "Introduction to Node.js",
	"author" : "John Dole",
	"price" : 75.00,
	"stock" : 0      
   }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the books collection.");
    callback(result);
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});

