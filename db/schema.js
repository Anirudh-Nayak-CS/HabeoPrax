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

const Userschema=model("Userschema",UserSchema);
const Habitschema=model("Habitschema",HabitSchema);

module.exports={
  Userschema,Habitschema
}