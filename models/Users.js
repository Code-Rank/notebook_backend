import {mongoose} from "mongoose";

const UserScheme=new mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String}
});

const UserModel=mongoose.model('Users',UserScheme);

export {UserModel};