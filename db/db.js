

const mongoose=require('mongoose')

const uri="mongodb+srv://vercel-admin-user:p3vxxZ4UnDJhskAx@cluster0.cmbuxv1.mongodb.net/sample_analytics?retryWrites=true&w=majority"


                        
const connectDB=()=>{


    return mongoose.connect(uri,{

      
      useNewUrlParser: true,
      useUnifiedTopology: true,
     

    }).then(()=>{console.log("yes")}).catch(()=>{console.log("nooooo")})

    
}


 
module.exports=connectDB