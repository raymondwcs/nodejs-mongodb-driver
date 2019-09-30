const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;
const url = '';
const dbName = '';

const replaceRestaurants = (db, callback) => {
   db.collection('restaurant')
      .replaceOne(
      { "restaurant_id" : "41156888" },
      { "name": "Unknown" }, 
      (err, results) => {
         console.log(results);
         callback();
      });
};

const client = new MongoClient(url);
client.connect((err) => {
   assert.equal(null,err);
   console.log("Connected successfully to server");

   const db = client.db(dbName);
 
   replaceRestaurants(db,() => {
      client.close();
   })
})