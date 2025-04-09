const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 5000
const homerouter = require('./homepage/home')
const { connecttoDB, getDB } = require("./db/connection")
const cors = require('cors')
const mongoose = require('mongoose')
const { Usermodel, Habitmodel } = require('./db/schema')
const addinghabit = require('./homepage/addinghabit')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

let db
app.use('/home', homerouter)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(passport.initialize())
require("./config/jwtstrategy")
const saltRound = 10

connecttoDB((err) => {
  if (!err) {
    db = getDB()
    app.post('/register', (req, res) => {
      bcrypt.hash(req.body.password, saltRound)
        .then((hashedpassword) => {
          req.body.password = hashedpassword
          console.log("Hashed password: ",hashedpassword)
          Usermodel.create(req.body)
            .then((data) => {
              console.log("User data: ",data)
              res.json(data)
        })
            .catch((e) => {
              console.log("Error creating user")
              res.json(e)
        })
        })
        .catch((e) => {
          console.log("Error hashing pw")
          console.log(e)
    })
    })
    

    app.post('/login', (req, res) => {
      const {username, email, password } = req.body;
      console.log(email)
      console.log(username)
      console.log(password)

      Usermodel.findOne({ email: email })
        .then((user) => {
          if (user) {
            bcrypt.compare(password, user.password)
              .then(isMatch => {
                if (!isMatch){
                console.log("No user found try again")
                  return res.json("No user found try again")
                }
                const payload = {
                  id: user.id,
                  username: user.username,
                  email: user.email,
                }

                jwt.sign(payload, process.env.JWT_secret, { expiresIn: "1hr" }, (err, token) => {
                  if (err) {
                    console.log("Error signing token")
                    return res.json( {
                  message:"Error signing token ",
                  error:err.message||err,})
                    }
                  res.json({
                    success: true,
                    token: 'Bearer ' + token,
                  })
                })
              })
          }
          else
            res.json("You don't have an account,kindly register")
        })
        .catch(e =>  {
          console.log("Error logging in")
          res.json(e)})
    })

    app.listen(PORT, () => {
      console.log(`listening to ${PORT}`)
    })
  } else {
    console.error("DB Connection failed")
  }
})
