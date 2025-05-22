import { Habitmodel } from '../db/schema.js'
import express from 'express'
import jwt from 'jsonwebtoken'
import path from 'path'
import dotenv from 'dotenv';
import mongoose  from 'mongoose';
const router=express.Router();
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

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

router.put('/habitdata',async (req,res)=> {
  const auth = req.headers.authorization;
 console.log("Authorization Header:", auth); 
     if (!auth?.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }
    const token = auth.split(' ').pop().trim();
console.log("Token:", token); 
  try {
 
   const  payload = jwt.verify(token, process.env.JWT_SECRET);
 const userId = payload.id;
  const habits=req.body.habits;
  try {
    console.log(habits);
    
const result=await Habitmodel.updateOne(
    {userId:userId },
    { 
      $set: { 
        habits: habits    
      }
    },
    { upsert: true } 
  );
  console.log("about adding habits ",result)
return res.status(200).json({success:true,message:"Added habits successfully"})
}
catch(e) {
  console.log(e);
  return res.status(500).json({success:false,message:"Adding habits failed"})
}
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
 

}
)
export default router