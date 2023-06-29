const express=require("express")
const UserSchema = require("./Schema/User")
require('dotenv').config();

let cors = require("cors");
const app=express()
app.use(express.json());
app.use(
    cors({
        origin:"http://localhost:3000"
    })
)


app.get("/userdata",async function(req,res){

   // const userdata=await req.body   //UserSchema.create(req.body)
   // return res.send(userdata)
  // console.log(userdata)
    
    return res.send("working fine")

})


app.listen(1212,async function(){

  console.log("connected"+process.env.PORT)

})