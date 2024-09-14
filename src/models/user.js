const mongoose=require("mongoose")

const user= new mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        required:true,
        default:"normal"
    }
})

const User=mongoose.model("User",user)
module.exports=User

