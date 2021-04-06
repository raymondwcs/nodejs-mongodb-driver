const { MongoClient } = require("mongodb");
const dbName = "test";
const collectionName = 'restaurants'
// Replace the uri string with your MongoDB deployment's connection string.
const uri = ``;
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const countRestaurants = (db, callback) => {
	let collection = db.collection(collectionName);

	collection.countDocuments({}, {}, (err, count) => {
		if (err) { throw err }
		callback(count);
	})
}

try {
	client.connect(err => {
		const db = client.db(dbName)

		countRestaurants(db, (count) => {
			console.log(`There are ${count} document(s) in the "${collectionName}" collection`);
			client.close();
		})
	})
} catch (err) {
	console.error(err)
}


