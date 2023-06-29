

const mongoose=require('mongoose')

const uri="mongodb+srv://shaan:shaan@cluster0.cmbuxv1.mongodb.net/appna_pg?retryWrites=true&w=majority"
                     
const connectDB=()=>{

    return mongoose.connect(uri,{

      useNewUrlParser: true,
      useUnifiedTopology: true,
    
    }).then(()=>{console.log("yes")}).catch(()=>{console.log("no")})

    
}

module.exports=connectDB