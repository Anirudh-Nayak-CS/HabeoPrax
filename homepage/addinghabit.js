const express=require('express')
const homerouter=require('./homepage/home')
const {connecttoDB,getDB}=require("./db/connection")

const router=express.Router()
router.post('/habit',(req,res)=> {
let habit=req.body

db=getDB();
db.collection('habits')
.insertOne(habit)
.then((result) => {
   res.status(200).json(result)
})
.catch((e) => {
  res.status(500).console.log(e)})
})
