import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
       type:String,
       require:true,
       unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    }
},{timestamps:true})

const User = mongoose.model('User',userSchema);
export default User;