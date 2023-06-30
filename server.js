const express=require("express")
const UserSchema = require("./Schema/User")
require('dotenv').config();

let cors = require("cors");
const connectDB = require("./db/db");
const app=express()
app.use(express.json());
app.use(
    cors({
        origin:"https://appna-pg.vercel.app"
    })
)

app.post("/userdata",async function(req,res){

    // const data={
    //     Frist_name:"hello",
    // Last_name:"hello",
    // Email:"hello",
    // Year:"1998",
    // Phone:1234456, 
    // Password:"shant", 
    // saved_pg:[],
    // reffrals:[]
    // }

   const userdata=await req.body  //UserSchema.create(data)
    return res.send(userdata)
  // console.log(userdata)
    
    return res.send("working fine")

})

app.listen(1212,async function(){
    await connectDB()
  console.log("connected")
})

