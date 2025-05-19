import { Usermodel } from '../db/schema.js'
import express from 'express'
import jwt from 'jsonwebtoken'
import path from 'path'
import dotenv from 'dotenv';
const router=express.Router();
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

router.put('/addingptstreak',async (req,res)=> {
  const auth = req.headers.authorization;
 console.log("Authorization Header:", auth); 
     if (!auth?.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }
    const token = auth.split(' ').pop().trim();
console.log("Token:", token); 
  try {
 
   const  payload = jwt.verify(token, process.env.JWT_SECRET);
 const username = payload.username;
  const {points,streak}=req.body;
  try {
   
   console.log(points,streak);

await Usermodel.updateOne(
    { username:username }, 
    { 
      $set: { 
        points: points,  
        streak: streak    
      }
    },
    { upsert: true } 
  );
return res.status(200).json({success:true,message:"Added points & streakcount successfully"})
}
catch(e) {
  console.log(e);
  return res.status(500).json({success:false,message:"Adding points & streakcount failed"})
}
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
 

}
)
export default router