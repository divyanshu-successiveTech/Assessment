import {faker} from "@faker-js/faker";
const student = require("../Models/studentSchema")


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