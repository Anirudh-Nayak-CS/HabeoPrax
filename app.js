const express=require('express')
const app=express()
require('dotenv').config()
const PORT=process.env.PORT || 5000
const homerouter=require('./homepage/home')
const {connecttoDB,getDB}=require("./db/connection")
const cors=require('cors')
const mongoose=require('mongoose')
const {Userschema,Habitschema}=require('./db/schema')


let db
app.use('/home',homerouter)
app.use(express.json())
app.use(cors())



connecttoDB((err) => {
  if(!err) {
    db=getDB()
  app.post('/register',(req,res)=> {

    db=getDB();
    Userschema.create(req.body)
    .then((data) => res.json(data))
    .catch((e)=> res.json(e))
  })
  app.post('/login',(req,res)=> {
    const {email,password}=req.body;
    Userschema.findOne({email:email})
    .then(user => {
      if(user) {
        if(user.password===password)
          res.json("success")
        else 
        res.json("wrong password,try again")
      }
      else 
      res.json("You don't have an account,kindly register")
    })
    .catch(e => res.json(e))
  })

app.listen(PORT,() => {
  console.log(`listening to ${PORT}`)
})
  
 
  }
  else {
   res.status(500).json({error:"An  internal error  occured"})
  }
}
)

