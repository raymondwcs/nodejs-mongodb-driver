const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;
const url = '';
const dbName = '';

const findRestaurants = function(db, callback) {
   var cursor = db.collection('restaurant').find();
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

const client = new MongoClient(url);
client.connect(function(err) {
   assert.equal(null,err);
   console.log("Connected successfully to server");

   const db = client.db(dbName);
 
   findRestaurants(db,function(){
      client.close();
   })
})