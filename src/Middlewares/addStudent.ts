import { NextFunction,Request,Response } from "express";
import Joi from "joi";

const studentDetails = Joi.object({
    name:Joi.string().required(),
  age: Joi.number().required(),
  grade: Joi.string().required(),
  email: Joi.string().required(),

})




export const addingStudent=(req:Request,res:Response,next:NextFunction)=>{

    const token = "ASDF"

    if(token === "ASDF"){

        const {error,value} = studentDetails.validate(req.body);
    
        if(error){
            res.send("Error")
        }
    
        req.body.validatedStudent = value;
        next();

    }else{
        console.log("No Access");
    }



}