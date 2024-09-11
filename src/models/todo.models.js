const mongoose = require("mongoose")

const TodoList=new mongoose.Schema({
    todo:{
        type:String,
        require:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
})

const todo=mongoose.model('todo',TodoList)
module.exports=todo