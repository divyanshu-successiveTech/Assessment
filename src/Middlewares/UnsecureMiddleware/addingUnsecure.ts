import { NextFunction,Request,Response } from "express";
import Joi, { string } from "joi";



const register = Joi.object({
    username:Joi.string().required(),
    password:Joi.string().required()
})




export const addingUnsecureStudent=(req:Request,res:Response,next:NextFunction)=>{
    
    

    const {error,value} = register.validate(req.body);

    if(error){
        res.send("Error")
    }

    req.body.validatedUser = value;
    next();

    


}