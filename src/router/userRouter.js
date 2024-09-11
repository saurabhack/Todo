const express=require("express")
const createUser=require("../controller/createUser.controller.js")
const loginUser=require("../controller/loginUser.controller.js")
const router=express.Router()

router.post('/',createUser)
router.post('/login',loginUser)

module.exports=router