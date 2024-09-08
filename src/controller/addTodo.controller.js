const todo=require("../models/todo.models.js")
async function addTodo(req,res){
    const body=req.body
    if(!body.todos){
        return res.json("something went wrong may be your todo is empty please complete these todo ")
    }else{
        todo.create({
            todo:body.todos
        })
        return res.redirect("/")
    }
}
module.exports=addTodo