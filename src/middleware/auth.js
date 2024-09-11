const {getUser}=require('../service/authService.js')
async function restrictToLoggedInUserOnly(req,res,next){
    const userUId=req.cookies?.uid;
    console.log("user id =",userUId)
    if(!userUId){ 
        return res.redirect('/login')
    }
    const user=getUser(userUId)

    if(!user){ 
        return res.redirect('/login')
    }
    req.user=user
    next();
}
module.exports={
    restrictToLoggedInUserOnly,
}