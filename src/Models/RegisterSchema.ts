import mongoose from "mongoose"
const registerUser = new mongoose.Schema({
    username:String,
    password:String
}) 

module.exports = mongoose.model("User",registerUser);