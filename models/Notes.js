import {mongoose,Schema} from "mongoose";

const noteSchema=new Schema({
   title:{type:String},
   description:{type:String},
   user_id:{type:String},
   created_at:{type:Date},
   updated_at:{type:Date}
});

const noteModel=new mongoose.model("notes",noteSchema);

export {noteModel}
