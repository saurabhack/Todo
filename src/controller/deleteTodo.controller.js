const todo=require("../models/todo.models.js")
async function deleteTodo(req,res){
    await todo.findByIdAndDelete(req.params.id)
    return res.redirect("/api/todo")
}
module.exports=deleteTodo