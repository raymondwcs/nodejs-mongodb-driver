const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;
const url = '';
const dbName = '';

const insertDocument = function(db, callback) {
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

const client = new MongoClient(url);
client.connect(function(err) {
  assert.equal(null,err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  insertDocument(db, function() {
      client.close();
  });
});

