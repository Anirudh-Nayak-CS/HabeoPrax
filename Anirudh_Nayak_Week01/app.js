import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { connecttoDB, getDB } from './db/connection.js';  
import { Usermodel, Habitmodel } from './db/schema.js';  
import './config/jwtstrategy.js';


dotenv.config();  
import homeRoute from './homepage/addinghabit.js'
import pointRoute from './homepage/addingptstreak.js'
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(homeRoute);
app.use(pointRoute);
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

const saltRound = 10

 connecttoDB((err) => {
  console.log("trying to connect")
  if (!err) {
  
   app.post('/register', (req, res) => {
      bcrypt.hash(req.body.password, saltRound)
        .then((hashedpassword) => {
          req.body.password = hashedpassword
          console.log("Hashed password: ",hashedpassword)
          Usermodel.create(req.body)
            .then((data) => {
              console.log("User data: ",data)
             return  res.status(201).json(data)
        })
            .catch((e) => {
              console.log("Error creating user")
              return  res.status(500).json({success:false, message:"Error creating user", error:e.message})
           
        })
        })
        .catch((e) => {
          console.log("Error hashing the  password")
         return  res.status(500).json({success:false, message:"Error hashing the password", error:e.message})
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
                  return res.status(401).json("No user found try again")
                }
                const payload = {
                  id: user.id,
                  username: user.username,
                  email: user.email,
                }
               
                
                jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, (err, token) => {
                  if (err) {
                    console.log("Error signing token")
                    return res.status(500).json( {
                  message:"Error signing token ",
                  error:err.message||err,})
                    }

                     
                    //Habitmodel.findOneAndUpdate({ userId: user._id },  { $set: { lastLogin: new Date() } }, { upsert: true }  )
                  
                   return res.json({
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
         return res.status(500).json(e)})
        })
    
        console.log("db connection :D")
      
          
    app.listen(PORT, () => {
      console.log(`listening to ${PORT}`)
    })
  } else {
    console.error("DB Connection failed")
    app.listen(PORT, () => {
      console.log(`listening to ${PORT}`)
    })
  }
})
