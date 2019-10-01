const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;
const url = '';
const dbName = '';

const findRestaurants = (db, callback) => {
   let cursor = db.collection('restaurant').find().limit(10)
   cursor.toArray((err,docs) => {
      assert.equal(err,null);
      callback(docs);
   });
};

const client = new MongoClient(url);
client.connect((err) => {
   assert.equal(null,err);
   console.log("Connected successfully to server");

   const db = client.db(dbName);
 
   findRestaurants(db,(restaurants) => {
      client.close();
      console.log("Disconnected MongoDB server");
      console.log(restaurants);
   })
})