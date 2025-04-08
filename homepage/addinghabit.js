const express=require('express')
const homerouter=require('./home')
const {connecttoDB,getDB}=require("../db/connection")

const router=express.Router()

connecttoDB((err)=>  {
  if(!err) {
    router.post('/createhabit',(req,res)=> {

      db=getDB();
        Habitschema.create(req.body)
        .then((data)=> res.json(data))
        .catch((e) => res.json(e))

      })
      app.listen(PORT,() => {
        console.log(`listening to ${PORT}`)
      }) 
    }
    else {
      console.log("An internal error occurered")
     
     }
})

module.exports= router





