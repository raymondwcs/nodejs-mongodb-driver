const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;
const url = 'mongodb+srv://student:comps381f@cluster0-xljee.mongodb.net/test?retryWrites=true&w=majority';
const dbName = 'test';

const aggregateRestaurants = (db, callback) => {
	var cursor = db.collection('restaurant').aggregate(
	[
		{$match: {"borough": "Queens", "cuisine": "Brazilian"}},
		{$group: {"_id": "$address.zipcode", "count": {$sum: 1}}}
	]
	).toArray((err, result) => {
		assert.equal(err,null);
		console.log(result);
		/*
		* Lets find which zipcode in Queens has the most number of Brazilian restaurants
		*/
		let max = 0;
		let maxZip = '';
		result.forEach((x) => {
			if (x.count > max) {
				max = x.count;
				maxZip = x._id;	
			}
		})
		console.log(`Zipcode ${maxZip} in Queens has the most number of Brazilian restaurants`);
		callback(result);
	});
};

const client = new MongoClient(url);
client.connect((err) => {
	assert.equal(null, err);
	console.log("Connected successfully to server");

	const db = client.db(dbName);
	
  aggregateRestaurants(db, function() {
      client.close();
	});
	
});
