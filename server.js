const express=require("express")
const UserSchema = require("./Schema/User")
require('dotenv').config();

let cors = require("cors");
const connectDB = require("./db/db");
const Usertoken = require("./Schema/token");
const app=express()
app.use(express.json());
app.use(
    cors({
        origin:"https://appna-pg.vercel.app"
    })
)

app.post("/userdata",async function(req,res){

    const data={
        First_name:req.body.First_name,
    Last_name:req.body.Last_name,
    Email:req.body.Email,
    Year:req.body.Year,
    Phone:1234567, 
    Password:req.body.Password, 
    saved_pg:[],
    reffrals:[]
    }
   const userdata=await UserSchema.create(data)

   if(userdata==null){
    const respons={
        data:userdata,
        status:"Fail"
      }
    return res.send(respons)
   }

   const respons={
     data:userdata,
     status:"400"
   }
   return res.send(respons)

})


app.get("/userdata/:id",async function(req,res){

   const userdata=await UserSchema.findOne({Email:{$eq:req.params.id}})
//    const respons={
//     data:userdata,
//     status:"400"
//   }

// if(userdata==null)
// {
//     const respons={
//         data:userdata,
//         status:"200"
//       }
//       return res.send(respons)

// }
  return res.send(userdata)
  
})

app.get("/ll",async function(req,res){
    const a=await Usertoken.find()
    return res.send(a)
})

app.get("/show",async function(req,res){
    const a=await UserSchema.find()
    return res.send(a)
})
app.listen(1212,async function(){
    await connectDB()
  console.log("connected")
})

