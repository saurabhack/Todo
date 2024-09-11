const todo=require("../models/todo.models.js")
async function addTodo(req,res){
    const body=req.body
    if(!body.todos){
        return res.json("something went wrong may be your todo is empty please complete these todo ")
    }else{
        todo.create({
            todo:body.todos,
            createdBy:req.user._id
        })
        return res.redirect("/api/todo")
    }
}
module.exports=addTodo