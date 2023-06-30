const mongoose=require("mongoose")

const accounts= new mongoose.Schema({
    account_id:{type:Number},

    limit:{type:Number},
    products:{type:Array},

    
})

const Usertoken=mongoose.model("accounts",accounts)



module.exports=Usertoken