const express=require('express')
const app=express()
require('dotenv').config()
const PORT=process.env.PORT || 5000
const homerouter=require('./homepage/home')
const {connecttoDB,getDB}=require("./db/connection")

let db
app.use('/',homerouter)
connecttoDB((err) => {
  if(!err) {
    db=getDB()

app.listen(PORT,() => {
  console.log(`listening to ${PORT}`)
})
  
 
  }
}
)

