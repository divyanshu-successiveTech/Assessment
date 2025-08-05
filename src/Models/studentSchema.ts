import mongoose from "mongoose";

export const studentSchema = new mongoose.Schema({
    name: String,
  age: Number,
  grade: String,
  email: String,
},
{timestamps:true})

module.exports = mongoose.model("Student",studentSchema);