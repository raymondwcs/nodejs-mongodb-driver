const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;
const url = '';
const dbName = '';

const books = [
{"name": "Intro to Node.js","author": "John Dole", "price": 75.0, "stock":0},
{"name": "Intro to MongoDB","author": "John Smith", "price": 85.0, "stock":10}
];

const insertDocument = (db, callback) => {
	db.collection('books').insertMany(books, function(err, result) {
		assert.equal(err, null);
		console.log(`Inserted ${books.length} documents into the books collection.`);
		callback(result);
	});
};

const client = new MongoClient(url);
client.connect((err) => {
	assert.equal(null, err);
	const db = client.db(dbName);
	insertDocument(db, () => {
      client.close();
  	});
});
