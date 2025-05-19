const { MongoClient } = require('mongodb');
let dbConnection;
require('dotenv').config();

const uri = process.env.MONGOURL;  // ✅ Use this instead

const connecttoDB = (cb) => {
  MongoClient.connect(uri)
    .then((client) => {
      dbConnection = client.db();  // Uses default DB from URL, e.g., 'habittracker'
      console.log("✅ Connected to MongoDB");
      return cb();
    })
    .catch((e) => {
      console.error("❌ MongoDB connection error:", e);
      return cb(e);
    });
};

const getDB = () => dbConnection;

module.exports = {
  connecttoDB,
  getDB,
};
