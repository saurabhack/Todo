const User=require("../models/user.js")
async function createUser(req,res){
    const body=req.body
    if(!body || !body.userName || !body.email || !body.password){
        return res.render('signUp',{
            err:"all fields are mendatory"
        })
    }else{
        if(body.password === body.password2){
            await User.create({
                userName:body.userName,
                email:body.email,
                password:body.password
            })
            return res.redirect("/api/todo")
        }else{
            return res.render("signUp",{
                err:"password does not matched please try again with similar passwords"
            })
        }   
    }
}

module.exports=createUser