

const mongoose=require('mongoose')

const uri="mongodb+srv://vercel-admin-user:fhNFKulE7Q4bK4UQ@cluster0.chpth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
                     
const connectDB=()=>{

    return mongoose.connect(uri,{

      useNewUrlParser: true,
      useUnifiedTopology: true,
    
    }).then(()=>{console.log("yes")}).catch(()=>{console.log("no")})

    
}

module.exports=connectDB