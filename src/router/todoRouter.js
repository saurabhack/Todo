const express=require("express")
const router=express.Router()
const showAllTodo=require("../controller/showAllTodo.controller.js")
const addTodo=require("../controller/addTodo.controller.js")
const deleteTodo = require("../controller/deleteTodo.controller.js")
const updateTodo = require("../controller/updateTodo.controller.js")
const todo = require("../models/todo.models.js")
const { restrictTo } = require("../middleware/auth.js")

router.get('/admin',restrictTo(['admin']), async (req,res)=>{
    if(!req.user){
        res.redirect('/login')
    }
    const allTodos=await todo.find({})
    console.log(allTodos)
    return res.render('home',{
        todos:allTodos
    })
})
router.get('/todo',restrictTo(['normal']),async (req,res)=>{
    if(!req.user){
        return res.redirect("/login")
    }
    const allTodos= await todo.find({createdBy:req.user._id})
    return res.render('home',{
        todos:allTodos
    })
})
router.get("/allTodos",showAllTodo)
router.post("/addTodo",addTodo)
router.post("/deleteTodo/:id",deleteTodo)
router.post("/updateTodo/:id",updateTodo)


module.exports=router