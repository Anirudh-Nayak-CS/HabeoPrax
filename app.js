const express=require('express')
const app=express()
require('dotenv').config()
const PORT=process.env.PORT || 5000
const homerouter=require('./homepage/home')
const {connecttoDB,getDB}=require("./db/connection")
const cors=require('cors')
const mongoose=require('mongoose')
const {Userschema,Habitschema}=require('./db/schema')
const addinghabit=require('./homepage/addinghabit')
const passport=require('passport')
const jwt=require('jsonwebtoken')

let db
app.use('/home',homerouter)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(passport.initialize())
require("./config/jwtstrategy")



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
    const {username,email,password}=req.body;
    
    Userschema.findOne({email:email})
    .then(user => {
      if(user) {
        if(user.password===password) {
          const payload={
            id:user.id,
            username:user.username,
            email:user.email,
          }
          jwt.sign (payload,process.env.JWT_secret,{expiresIn:"1hr"},(err,token) =>{
            if(err)
              console.log("Error signing token ",err)

            res.json({
              success:true,
              token: 'Bearer '+ token,
              
            })
          })
        }
         
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

