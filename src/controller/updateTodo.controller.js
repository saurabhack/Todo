const todo=require("../models/todo.models.js")
async function updateTodo(req,res){
    const body=req.body
    await todo.findByIdAndUpdate(req.params.id,{
        todo:body.todos
    })
    res.redirect('/')
}
module.exports=updateTodo