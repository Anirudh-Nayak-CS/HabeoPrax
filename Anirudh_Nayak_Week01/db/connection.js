const { MongoClient } = require('mongodb');
const path=require('path')
require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});
let dbconnection;
let uri=process.env.URI

async function connecttoDB(){
 try {
const client=await MongoClient.connect(uri)

  dbconnection=client.db()
  return dbconnection
 }
 catch (e) {
  console.log(e)
  throw e
 }
}

const getDB=()=> {
  return dbconnection
}

module.exports={
  connecttoDB,getDB
}

