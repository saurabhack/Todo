const {getUser}=require('../service/authService.js')

function checkForAuthentication(req,res,next){
    req.user=null
    const tokenCookie=req.cookies?.token
    if(!tokenCookie){
        return next()
    }
    const token=tokenCookie
    const user=getUser(token)
    req.user=user;
    next();

}

function restrictTo(roles){
    return function(req,res,next){
        if(!req.user){
            return res.redirect('/login')
        }
        if(!roles.includes(req.user.role)){
            return res.end("unauthorized");
        }
        return next()
    }
}

module.exports={
    checkForAuthentication,
    restrictTo
}