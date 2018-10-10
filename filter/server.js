var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
//var url = 'mongodb://localhost:27017/test';
var url = 'mongodb://developer:developer123@ds031873.mlab.com:31873/comps381f';

var aggregateRestaurants = function(db, callback) {
	var cursor = db.collection('restaurant').aggregate(
	[
		{$match: {"borough": "Queens", "cuisine": "Brazilian"}},
		{$group: {"_id": "$address.zipcode", "count": {$sum: 1}}}
	]
	).toArray(function(err, result) {
		assert.equal(err,null);
		console.log(result);
		callback(result);
	});
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  aggregateRestaurants(db, function() {
      db.close();
  });
});

