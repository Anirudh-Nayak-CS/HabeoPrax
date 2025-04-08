const {MongoClient}=require('mongodb')
let dbConnection
require('dotenv').config()
let username=process.env.DB_USERNAME
let pw=process.env.DB_PW
let cluster=process.env.DB_CLUSTER
let dbname=process.env.DB_NAME


let uri=`mongodb+srv://${username}:${pw}@${cluster}/?retryWrites=true&w=majority&appName=${dbname}`


const connecttoDB= (cb) => {
MongoClient.connect(uri)
.then((client)=> {
  dbConnection=client.db()
  return cb()
})
.catch((e)=> {
  console.log(e)
  return cb(e)
})

}
const getDB= () => dbConnection



module.exports={
  connecttoDB,getDB
}

