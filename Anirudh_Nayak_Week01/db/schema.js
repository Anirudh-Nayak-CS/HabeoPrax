const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
username: {
  type:String,
  required:true,
  unique:true,
},
email: {
  type:String,
  required:true,
  unique:true,
},

password:{
  type:String,
  required:true,
 
}

})

const HabitSchema=new mongoose.Schema({
  habitname: {
    type:String,
    required:true,
    unique:true,
  },
  duration: {
    type:Number,
    required:true,
   
  },
  timesperday:{
    type:Number,
    required:true,
  },
  primarytime:{
    type:String,
    required:true,
  },
  days:{
    type:[String],
  required:true,
  
  },
  
  completion: {
    type:Boolean,
  required:true,
  },
  setReminder:Boolean,
  streakcount:Number, 
  
})

const Usermodel= new mongoose.model("User",UserSchema);
const Habitmodel=new mongoose.model("Habit",HabitSchema);

module.exports={
  Usermodel,Habitmodel
}