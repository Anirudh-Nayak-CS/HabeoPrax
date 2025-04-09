
const express=require('express')

const quotes=require('./quotes')
const router=express.Router()

router.get('/quotes',(req,res)=> {
  const quote=quotes()
    res.json(quote)
})


module.exports= router