var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var books = [
{"name": "Intro to Node.js","author": "John Dole", "price": 75.0, "stock":0},
{"name": "Intro to MongoDB","author": "John Smith", "price": 85.0, "stock":10}
];

var insertDocument = function(db, callback) {
	db.collection('books').insert(books, function(err, result) {
		assert.equal(err, null);
		console.log("Inserted documents into the books collection.");
		callback(result);
	});
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});
