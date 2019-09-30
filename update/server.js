const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;
const url = '';
const dbName = '';

const updateRestaurants = (db, callback) => {
   db.collection('restaurant')
      .updateOne(
      { "restaurant_id" : "41156888" },
      { $set: { "address.street": "East 31st Street" } }, (err, results) => {
         console.log(results);
         callback();
      });
};

const client = new MongoClient(url);
client.connect((err) => {
   assert.equal(null,err);
   console.log("Connected successfully to server");

   const db = client.db(dbName);
 
   updateRestaurants(db,() => {
      client.close();
   })
})