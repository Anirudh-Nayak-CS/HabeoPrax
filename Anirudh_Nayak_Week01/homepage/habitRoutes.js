import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Habitmodel } from '../db/schema.js';

dotenv.config();
const router = express.Router();

// GET /habitdata - fetch habits for logged-in user
router.get('/habitdata', async (req, res) => {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  const token = auth.split(' ').pop().trim();

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const userId = payload.id;

    const userHabits = await Habitmodel.findOne({ userId });
    return res.status(200).json({ success: true, habits: userHabits?.habits || [] });
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
});

// PUT /habitdata - add or update habits for logged-in user
router.put('/habitdata', async (req, res) => {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  const token = auth.split(' ').pop().trim();

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const userId = payload.id;
    const habits = req.body.habits;

    await Habitmodel.updateOne(
      { userId },
      { $set: { userId, habits } },
      { upsert: true }
    );

    return res.status(200).json({ success: true, message: 'Habits saved successfully' });
  } catch (err) {
    console.error(err);
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
});

export default router;
