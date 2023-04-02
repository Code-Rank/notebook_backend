import mongoose from "mongoose";
import { noteModel } from "../models/Notes.js";

const createNote = async (req, res) => {
    const { title, description,user_id } = req.body;
    try {

        const result = await noteModel.create({
            title: title,
            description: description,
            user_id: user_id,
            created_at: new Date(),
            updated_at: new Date()
        });
        ////console.log("un");
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

const getNotes = async (req, res) => {

    try {
        let user_id = req.params.id;
        //console.log(user_id);
        let result = await noteModel.find({ user_id }).exec();
        res.send(result);

    } catch (error) {
        res.send(error);
    }
}
const updateNotes = async (req, res) => {
    let { title, description, user_id } = req.body;
    //console.log(req.params.id);
    try {
        let result = await noteModel.updateOne({ _id: req.params.id }, { $set: { title: title, description: description, user_id: user_id, updated_at: new Date, created_at: new Date } }, { upsert: true });
        if (result) {
            res.send(result);
        } else {
            res.send(`no`);
        }

    } catch (error) {
        res.send(error);
    }
}

const deleteNotes=async (req,res)=>{
    try {
        let result=await noteModel.findByIdAndDelete({_id:req.params.id});
        if(result){
           res.send(result);
        }else{
res.send("no");
        }
    } catch (error) {
       res.send(error); 
    }
}
export { createNote, getNotes, updateNotes ,deleteNotes}