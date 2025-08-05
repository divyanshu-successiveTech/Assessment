import mongoose from "mongoose"; 
const student = require("../Models/studentSchema")
mongoose.connect("mongodb://localhost:27017/TrialDB");



let arr = [];
for (let i =0;i<=50;i++){
    let obj = {
        name:"ABC",
        age:i,
        grade:"A",
        email:"ABC@123.Com"
    }

    arr.push(obj);
    
}

arr.map(async(item)=>{
    const value = new student(item);
    const result = await student.insertOne(value);
})