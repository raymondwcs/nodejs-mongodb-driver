const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;
const url = '';
const dbName = '';

const aggregateRestaurants = (db, callback) => {
	/*
	let cursor = db.collection('restaurant').aggregate(
	[
		{$group: {"_id": "$borough", "count": {$sum: 1}}}
	]
	).toArray((err, result) => {
		assert.equal(err,null);
		console.log(result);
		callback(result);
	});
	*/
	let cursor = db.collection('restaurant').aggregate(
		[
			{$group: {"_id": "$borough", "count": {$sum: 1}}}
		]
	);
	cursor.forEach((c) => {
		console.log(c);
	})
	callback();
};

const client = new MongoClient(url);
client.connect((err) => {
	assert.equal(null,err);
	console.log("Connected successfully to server");
	
	const db = client.db(dbName);
	aggregateRestaurants(db,function(){
		 client.close();
	});
});