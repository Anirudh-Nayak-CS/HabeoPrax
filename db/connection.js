const {MongoClient}=require('mongodb')
let dbConnection
require('dotenv').config()
let username=process.env.DB_USERNAME
let pw = encodeURIComponent(process.env.DB_PW);
let cluster=process.env.DB_CLUSTER
let DBNAME=process.env.DBNAME


let uri=`mongodb+srv://${username}:${pw}@${cluster}.mongodb.net/${DBNAME}?retryWrites=true&w=majority`


const connecttoDB= (cb) => {
MongoClient.connect(uri)
.then((client)=> {
  dbConnection=client.db()
  return cb()
})
.catch((e)=> {
  console.log("not connected")
  return cb(e)
})

}
const getDB= () => dbConnection



module.exports={
  connecttoDB,getDB
}

