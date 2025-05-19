import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { connecttoDB } from './db/connection.js';
import { Usermodel } from './db/schema.js';
import './config/jwtstrategy.js';

import habitRoutes from './homepage/habitRoutes.js';  // ✅ Unified route

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use('/', habitRoutes);  // ✅ Only one route for habits

const saltRound = 10;

connecttoDB((err) => {
  if (!err) {
    console.log("DB connected");

    app.post('/register', (req, res) => {
      bcrypt.hash(req.body.password, saltRound)
        .then((hashedPassword) => {
          req.body.password = hashedPassword;
          Usermodel.create(req.body)
            .then((user) => res.status(201).json(user))
            .catch((e) =>
              res.status(500).json({ success: false, message: "Error creating user", error: e.message })
            );
        })
        .catch((e) =>
          res.status(500).json({ success: false, message: "Password hashing failed", error: e.message })
        );
    });

    app.post('/login', (req, res) => {
      const { email, password } = req.body;

      Usermodel.findOne({ email })
        .then((user) => {
          if (!user) return res.status(401).json("No user found, please register");

          bcrypt.compare(password, user.password)
            .then((isMatch) => {
              if (!isMatch) return res.status(401).json("Incorrect password");

              const payload = { id: user.id, username: user.username, email: user.email };

              jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, (err, token) => {
                if (err) return res.status(500).json({ message: "Token signing failed", error: err });

                return res.json({ success: true, token: 'Bearer ' + token });
              });
            });
        })
        .catch((e) => res.status(500).json({ message: "Login error", error: e.message }));
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } else {
    console.error("DB Connection failed");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
});
