const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;
const url = '';
const dbName = '';

const deleteRestaurants = (db, callback) => {
   db.collection('restaurant').deleteOne(
      { "restaurant_id" : "41156888" }, 
      (err, results) => {
         if (err) throw err;
         console.log(results);
         callback();
      }
   );
};

const client = new MongoClient(url);
client.connect((err) => {
   assert.equal(null,err);
   console.log("Connected successfully to server");

   const db = client.db(dbName);
 
   deleteRestaurants(db,() => {
      client.close();
   })
})