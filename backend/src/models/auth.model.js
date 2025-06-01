import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import dotenv  from "dotenv";

dotenv.config()

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id}, process.env.JWT_SECRET,{expiresIn:"7d"}) 
    return token;
}


const User = mongoose.model("User", userSchema)

export default User;