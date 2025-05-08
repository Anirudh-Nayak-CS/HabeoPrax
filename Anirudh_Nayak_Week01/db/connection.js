const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

let dbconnection;
const uri = process.env.URI;

function connecttoDB(cb) {
  mongoose.connect(uri)
  .then(() => {
    dbconnection = mongoose.connection.db;


    console.log(" Connected DB name:", mongoose.connection.name);

    mongoose.connection.db.listCollections().toArray()
      .then(cols => {
        console.log(" Collections in this DB:", cols.map(c => c.name));
        cb(null); 
      })
      .catch(err => {
        console.error("listCollections error:", err);
        cb(null); 
      });

  })
  .catch(err => {
    console.error(" Mongoose connect failed:", err.message);
    cb(err); 
  });
}

const getDB = () => dbconnection;

module.exports = {
  connecttoDB, getDB
};
