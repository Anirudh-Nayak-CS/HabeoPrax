import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
   points: {
    type: Number,
    default: 0,
  },
  lastLogin: {
    type: Date,
    default: null,
  },
   streak: Number,
});

const HabitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true, 
  },
 habits:  [ {
  _id: false,
  title: {
    type: String,
    required: true,
  },
  icon: {
   type:String,
   required:true,
  },
  duration: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  day: {
    type: [String],
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
  setReminder: Boolean,
 
  points: {
    type:Number,
    min:0,
  }
 }
 
]});

const Usermodel = mongoose.model("User", UserSchema);
const Habitmodel = mongoose.model("Habit", HabitSchema);

export { Usermodel, Habitmodel };
