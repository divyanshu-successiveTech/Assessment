import { NextFunction ,Request,Response} from "express";

const defaultuser ="ABC";
const defaultpass = "111"

export const addingUnsecureLOGIN=(req:Request,res:Response,next:NextFunction)=>{

    const {user,pass} = req.body;

    if(user===defaultuser && pass === defaultpass){
        res.send("UserIsValidated")

    }else{
        res.send("UserIsNotValid");
    }
    
    

   

    


}