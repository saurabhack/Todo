const express=require("express")
const router=express.Router()
const showAllTodo=require("../controller/showAllTodo.controller.js")
const addTodo=require("../controller/addTodo.controller.js")
const deleteTodo = require("../controller/deleteTodo.controller.js")
const updateTodo = require("../controller/updateTodo.controller.js")
router.get("/allTodos",showAllTodo)
router.post("/addTodo",addTodo)
router.post("/deleteTodo/:id",deleteTodo)
router.post("/updateTodo/:id",updateTodo)


module.exports=router