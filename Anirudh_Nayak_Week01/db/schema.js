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
  }
});

const HabitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true, 
  },

  habitname: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  timesperday: {
    type: Number,
    required: true,
  },
  primarytime: {
    type: String,
    required: true,
  },
  days: {
    type: [String],
    required: true,
  },
  completion: {
    type: Boolean,
    required: true,
  },
  setReminder: Boolean,
  streakcount: Number,
  points:Number,
});

const Usermodel = mongoose.model("User", UserSchema);
const Habitmodel = mongoose.model("Habit", HabitSchema);

export { Usermodel, Habitmodel };
