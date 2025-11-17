import mongoose from "mongoose"
// export const dbConnect=async()=>{
//    const conn= await  mongoose.connect('mongodb://localhost:27017/Quirex');
//    if(conn){
//     console.log("Db connected successfully............"); 
//    } 
// }

let isConnected=false;
export const dbConnect=async()=>{
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
    