const express=require("express")
const router=express.Router()
const todo=require("../models/todo.models.js")

router.get('/',async (req,res)=>{
    const allTodos=await todo.find()
    return res.render('home',{
        todos:allTodos
    })
})
router.get('/update/:id', async (req,res)=>{
    const todoli=await todo.findById(req.params.id)
    return res.render('update',{
        todoL:todoli,
    })
})

module.exports=router