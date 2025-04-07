const express=require('express')
const homerouter=require('./homepage/home')
const {connecttoDB,getDB}=require("./db/connection")

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
      res.status(500).json({error:"An  internal error  occured"})
     }
})

module.exports= router





