const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;
const url = '';
const dbName = '';

const insertDocument = (db, callback) => {
   db.collection('books').insertOne( {
    "name" : "Introduction to Node.js",
    "author" : "John Dole",
    "price" : 75.00,
    "stock" : 0      
   }, (err, result) => {
      assert.equal(err, null);
      console.log("Inserted one document into the books collection.");
      callback(result);
  });
};

const client = new MongoClient(url);
client.connect((err) => {
  assert.equal(null,err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  insertDocument(db, () => {
      client.close();
  });
});

