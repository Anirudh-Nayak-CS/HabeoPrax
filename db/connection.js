const {MongoClient}=require('mongodb')
let dbConnection
let uri="mongodb+srv://anirudhnayak:anininniboy2006@cluster0.4pb9n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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

