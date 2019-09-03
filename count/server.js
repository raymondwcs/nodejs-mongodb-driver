const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;
const url = '';  // mlab url
const dbName = ''; // mlab db


const countRestaurants = function (db, callback) {
	var collection = db.collection('restaurant');
	collection.countDocuments(function (err, count) {
		assert(null, err);
		console.log(`There are ${count} documents in the restuarant collection`);
	})
	callback();
}

const client = new MongoClient(url);

client.connect(function (err) {
	assert.equal(null, err);
	console.log("Connected successfully to server");

	const db = client.db(dbName);

	countRestaurants(db, function() {
		client.close();
	})
})
