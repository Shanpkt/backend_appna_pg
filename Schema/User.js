const mongoose=require("mongoose")

const User= new mongoose.Schema({
    First_name:{type:String,trim:true},
    Last_name:{type:String,trim:true},
    Email:{type:String},
    Year:{type:String},
    Phone:{type:Number}, 
    Password:{type:String}, 
    saved_pg:[{type: mongoose.Schema.Types.ObjectId,ref:'dataPG'}],
    reffrals:{type:Array}
})

const UserSchema=mongoose.model("User",User)

module.exports=UserSchema