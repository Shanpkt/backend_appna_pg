const express=require("express")
const UserSchema = require("./Schema/User")

let cors = require("cors");
const app=express()
app.use(express.json());
app.use(
    cors({
        origin:"http://localhost:3000"
    })
)


app.post("/userdata",async function(req,res){

    const userdata=await req.body   //UserSchema.create(req.body)
   // return res.send(userdata)
   console.log(userdata)
    
    return res.send("working fine")

})


app.listen(4004,async function(){

  console.log("connected")

})