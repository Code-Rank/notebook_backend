import  express, { json }  from "express";

import mongoose from "mongoose";
import { UserModel } from "./models/Users.js";
import { db_connection } from "./db/connection.js";
import  {router as userRoute}  from "./routes/userRoute.js";
import { router as noteRoute } from "./routes/notesRoute.js";

const app=express();
const port =3000;
db_connection();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/user",userRoute);
app.use("/note",noteRoute);
/* app.get("/",async (req,res)=>{
    try{
         const result=await UserModel.create({
            name:"Umair",
            password:"123",
            email:"ua220743@gmail.com"
         });  
         res.send(result);      
    }catch(err){
          res.send(err);
    }
    
    //res.send("hello");
}); */

app.listen(port,(req,res)=>{
    console.log(`run on this port ${port}`);
});