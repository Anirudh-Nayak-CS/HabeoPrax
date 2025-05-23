import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import cron from 'node-cron';
import bcrypt from 'bcrypt';
import { connecttoDB, getDB } from './db/connection.js';  
import { Usermodel, Habitmodel } from './db/schema.js';  
import configurePassport from './config/jwtstrategy.js'; // 
import { sendEmail, welcomeEmailHTML, addPoints } from './emailNotifications.js';
import moment from 'moment'; 

dotenv.config();  
configurePassport(passport);
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
                   sendEmail({
            to: data.email,
            subject: "🎉 Welcome to HabeoPrax!",
            html: welcomeEmailHTML({ name: data.username })
          });

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
                     user.lastLogin = new Date();
                     user.save();

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
    
app.get('/notifications', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const user = await Usermodel.findById(req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  console.log("Fetched notifications:", user.notifications);
  res.json(user.notifications.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
});

app.post('/notify-completion', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const user = await Usermodel.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const today = new Date().toDateString();
    const alreadyNotified = user.notifications.some(n =>
      n.message.includes("completed all your habits") &&
      new Date(n.timestamp).toDateString() === today
    );

    if (!alreadyNotified) {
      console.log("Before pushing notification:", user.notifications.length);
      user.notifications.push({
        type: 'completion',
        message: `🎉 Awesome! You've completed all your habits for today. Keep it up!`,
        timestamp: new Date()
      });
      console.log("After pushing notification:", user.notifications.length);
      await user.save();
      console.log("✅ Notification saved to DB");
    }

    res.status(200).json({ success: true });
  } catch (e) {
    console.error("Notification error", e);
    res.status(500).json({ success: false, message: e.message });
  }
});



    cron.schedule('*/10 * * * *', async () => {
  const now = new Date();
  const users = await Usermodel.find();

  for (const user of users) {
    const userHabits = await Habitmodel.findOne({ userId: user._id });
    if (!userHabits) continue;

    for (const habit of userHabits.habits) {
      const habitTime = moment(habit.time, ['h:mm A', 'HH:mm']); // 4:30 p.m => moment time
      const nowTime = moment();

      // Check if habit is set for today and it's over 1 hour late and not done
      const today = nowTime.format('dddd');
      const isToday = habit.day.includes(today);
      const isLate = nowTime.diff(habitTime, 'minutes') > 60;
      const notDone = !habit.done;

      if (isToday && isLate && notDone) {
        const alreadyNotified = user.notifications.some(n => 
          n.message.includes(habit.title) &&
          moment(n.timestamp).isAfter(moment().subtract(6, 'hours'))
        );
        if (!alreadyNotified) {
          user.notifications.push({
            type: 'reminder',
            message: `⏰ You haven't completed "${habit.title}" scheduled for ${habit.time}. Stay on track!`,
            timestamp: new Date(),
          });
          await user.save();
        }
      }
    }
  }
});
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
