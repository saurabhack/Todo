const express=require("express")
const {restrictToLoggedInUserOnly,checkAuth} = require("./src/middleware/auth.js")
const cookieParser=require("cookie-parser")

const handleRouters=require("./src/router/todoRouter.js")
const handleStaticRouter=require("./src/router/staticRouter.js")
const UserRouter=require("./src/router/userRouter.js")
const path=require("path")
const  mongoose= require("mongoose")


const app=express()

const port=8000

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use('/api',restrictToLoggedInUserOnly,handleRouters)
app.use('/',handleStaticRouter)
app.use("/user",UserRouter)
app.set('view engine',"ejs")
app.set("views",path.resolve("./src/views"))

mongoose.connect('mongodb://127.0.0.1:27017/todoCreater').then(()=>{
    console.log("mongodb successfully connected")
}).catch((err)=>{
    console.log("something went wrong with database connectivity = ", err)
})

app.listen(port,()=>{
    console.log(`server is listening on the port of = http://localhost:${port}` )
})
