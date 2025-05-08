const express=require('express')
const homerouter=require('./home')
const {connecttoDB,getDB}=require("../db/connection")

const router=express.Router()


    router.post('/createhabit',(req,res)=> {
        Habitschema.create(req.body)
        .then((data)=> res.json(data))
        .catch((e) => res.json(e))

      })

module.exports= router





