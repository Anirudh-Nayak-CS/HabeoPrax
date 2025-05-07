const mongoose=require('mongoose')
mongoose.set('strictQuery', true);
const path=require('path')
require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

let dbuser=process.env.DB_USER
let dbpw = encodeURIComponent(process.env.DB_PW);
let cluster=process.env.DB_CLUSTER
let dbname=process.env.DBNAME


let uri=`mongodb+srv://${dbuser}:${dbpw}@${cluster}.mongodb.net/?retryWrites=true&w=majority&appName=${dbname}`

let connecttoDB= (cb)=> mongoose.connect(uri)
.then(()=> {
  console.log("mongo db connected")
  return cb()
})
.catch((e)=>  {
  console.log(e)
  return cb(e)
})

const getDB=()=> {
  return mongoose.connection.db
}

module.exports={
  connecttoDB,getDB
}

