import mongoose from "mongoose";

const db_connection=async ()=>{
    try{
        const result=await mongoose.connect('mongodb://0.0.0.0:27017/note_book');
        console.log(result?"connected":"not connected");
    }catch(err){
        console.log(err);
    }
    
    
   
}
export {db_connection}