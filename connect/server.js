const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;
const url = '';
const dbName = '';

const client = new MongoClient(url);

client.connect((err) => {
   assert.equal(null,err);
   console.log("Connected successfully to server");

   const db = client.db(dbName);

   /*
   *  CRUD Operations
   */

   client.close();
});