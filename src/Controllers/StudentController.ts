import { NextFunction,Request,Response } from "express"

const student = require("../Models/studentSchema")

class StudentController{

    async adding(req:Request,res:Response,next:NextFunction){
        const value = new student(req.body.validatedStudent)
        const result = await student.insertOne(value);
        res.send({Message:"Successfull",
            data:result
        })

    }

    async gettingById(req:Request,res:Response,next:NextFunction){
        const value = await student.findById(req.params.id);
        try{

            if(value){
                res.send({Message:"Successfull",
                    data:value
                })
    
            }else{throw new Error("Invalid Id")}
        }catch(err){
            next(err);
        }


    }

    async updateById(req:Request,res:Response,next:NextFunction){
        
        const value = await student.findByIdAndUpdate(req.params.id,{name:"ABC"},{new:true});

        try{

            if(value){
    
                res.send({Message:"Successfull",
                    data:value
                })
    
                
            }else{throw new Error("Invalid Id")}
        }catch(err){
            next(err);
        }

    }

    async DeleteById(req:Request,res:Response,next:NextFunction){
        const value = await student.findByIdAndDelete(req.params);

        try{

            if(value){
                res.send({Message:"Successfully Deleted",
                data:value
            })

            }else{throw new Error("Invalid Id")}

        }catch(err){
            next(err);
        }
        

        

    }

    async getByQuery(req:Request,res:Response){
        const {minAge,maxAge} = req.query;
        const value = await student.find({age:{$gte:minAge,$lte:maxAge} });
        res.send({Message:"Successfully Deleted",
            data:value
        })
        
    }

    async getStudentByPagenation(req:Request,res:Response){

        const {page,limit} = req.query
        const value = student.find({}).limit(limit);
        res.send({status:"Success",
            result:value
        })

    }

}

export const studdentController = new StudentController