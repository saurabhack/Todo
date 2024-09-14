const express=require("express")
const router=express.Router()
const todo=require("../models/todo.models.js")

router.get('/update/:id', async (req,res)=>{
    const todoli=await todo.findById(req.params.id)
    return res.render('update',{
        todoL:todoli,
    })
})
router.get("/signUp",(req,res)=>{
    return res.render("signUp")
})
router.get("/login",(req,res)=>{
    res.render("login")
})
module.exports=router