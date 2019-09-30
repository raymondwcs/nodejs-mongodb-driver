const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;
const url = '';
const dbName = '';

const findRestaurants = (db, callback) => {
   let cursor = db.collection('restaurant').find({"borough": "Manhattan" }).limit(10);
   cursor.forEach((doc) => {
      console.log(JSON.stringify(doc));
   });
   callback();
};

const client = new MongoClient(url);
client.connect((err) => {
   assert.equal(null,err);
   console.log("Connected successfully to server");

   const db = client.db(dbName);
 
   findRestaurants(db,() => {
      client.close();
   })
})