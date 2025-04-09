const {MongoClient}=require('mongodb')
let dbConnection
require('dotenv').config()
let username=process.env.DB_USERNAME
let pw = encodeURIComponent(process.env.DB_PW);
let cluster=process.env.DB_CLUSTER
let DBNAME=process.env.DBNAME


let uri=`mongodb+srv://${username}:${pw}@${cluster}.mongodb.net/?retryWrites=true&w=majority&appName=${DBNAME}`


const connecttoDB= (cb) => {
MongoClient.connect(uri)
.then((client)=> {
  dbConnection=client.db()
  console.log("success")
  return cb()
})
.catch((e)=> {
  console.log("An internal error occured")
  return cb(e)
})

}
const getDB= () => dbConnection



module.exports={
  connecttoDB,getDB
}

