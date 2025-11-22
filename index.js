import express from 'express';
import mongoose from "mongoose"
import router from './route/userRoute.js';
import adminRoute from './route/adminRoute.js'
import fileUpload from 'express-fileupload';
import cors from 'cors';
const app=express();


app.use(express.json());
app.use(fileUpload());
app.use(cors());


const PORT=9000; 

let isConnected=false;
const dbConnect=async()=>{
   try {
      const conn= await  mongoose.connect('mongodb://localhost:27017/Quirex');
      if(conn){
      console.log("Db connected successfully............"); 
      isConnected=true;
      } 
      
   } catch (error) {
      console.log("Db connection error");
   }
}

//add middleware
app.use((req,res,next)=>{
    if(!isConnected){
        dbConnect();
    }
    next();
})

 app.use('/img', express.static('uploads'));
 app.use('/api',router);
 app.use('/api',adminRoute)

// app.listen(PORT,()=>{
//     console.log("Server running..."); 
// })

export default app;
