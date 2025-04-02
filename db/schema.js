const mongoose=require('mongoose')

const schema=mongoose.Schema()


const UserSchema=new schema({
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
mood: {
 type:String,
},
password:{
  type:String,
  required:true,
  unique:true,
}

})

const HabitSchema=new schema({
  name: {
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

  days:{
    type:[String],
  required:true,
  
  },
  reminder:Number,
  time:{ 
    type:String,
    required:true,
  },
  completion: {
    type:Boolean,
  required:true,
  },
  streakcount:Number,
  icon: {
    category:{
    type:String,
    required:true,
   },
   url:{
    type:String,
    required:true,
   },
  },
  
  setReminder:Boolean,
})