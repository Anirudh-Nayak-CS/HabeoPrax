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
}

})

const HabitSchema=new schema({
  name: {
    type:String,
    required:true,
    unique:true,
  },
  duration: {
    type:String,
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
})