const mongoose = require("mongoose")

const TodoList=new mongoose.Schema({
    todo:{
        type:String,
        require:true
    }
})

const todo=mongoose.model('todo',TodoList)
module.exports=todo