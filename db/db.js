

const mongoose=require('mongoose')

const uri="mongodb+srv://vercel-admin-user:p3vxxZ4UnDJhskAx@cluster0.cmbuxv1.mongodb.net/appna_pg?retryWrites=true&w=majority"


                        
const connectDB=()=>{


    return mongoose.connect(process.env.MONGODB_URI,{

      
      useNewUrlParser: true,
      useUnifiedTopology: true,
     

    }).then(()=>{console.log("yes")}).catch(()=>{console.log("nooooo")})

    
}


 
module.exports=connectDB