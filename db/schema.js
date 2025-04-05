const mongoose=require('mongoose')

const {Schema,model}=mongoose;


const UserSchema=new Schema({
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

const HabitSchema=new Schema({
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

const Userschema=model("Userschema",UserSchema);
const Habitschema=model("Habitschema",HabitSchema);

module.exports={
  Userschema,Habitschema
}