const {v4:uuidv4} = require('uuid')
const {setUser}=require("../service/authService.js")
const User=require("../models/user.js")
async function loginUser(req,res){

    const {email,password}=req.body
    const user=await User.findOne({email,password})
    if(!user){
        return res.render("login",{
            err:"user is not exists"
        })
    }else{
        const token=setUser(user)
        res.cookie('token',token)
        return res.redirect('/api/todo')
    }
    
}
module.exports=loginUser