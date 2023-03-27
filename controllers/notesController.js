import mongoose  from "mongoose";
import { noteModel } from "../models/Notes.js";

const createNote=async (req,res)=>{
    const {title,description}=req.body;
    try {
        
        const result=await noteModel.create({
            title:title,
            description:description,
            user_id:"123",
            created_at:new Date(),
            updated_at:new Date()
        });
        console.log("un");
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

export {createNote}