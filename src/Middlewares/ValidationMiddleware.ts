import { NextFunction ,Request,Response} from "express"

export const validation=(req:Request,res:Response,next:NextFunction)=>{

    const token = "ASDF";

    try{

        if(token === "ASDF"){
            next();
        }else{
            throw new Error;
        }

    }catch(err){
        next(err)
    }


}