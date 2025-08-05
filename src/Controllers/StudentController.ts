import { NextFunction,Request,Response } from "express"

const student = require("../Models/studentSchema")
const user = require("../Models/RegisterSchema")


class StudentController{

    async adding(req:Request,res:Response,next:NextFunction){
        const value = new student(req.body.validatedStudent)
        const result = await student.insertOne(value);
        res.send({statusCode:201,
            status:"Successfully Created User",
            data:result
        })

    }

    async addingUser(req:Request,res:Response){
        const value = new user(req.body.validatedUser);
        const result  = await user.insertOne(value);
        res.send({statusCode:201,
            status:"Successfully Created User",
            data:result
        })
    }

    async gettingById(req:Request,res:Response,next:NextFunction){
        const value = await student.findById(req.params.id);
        try{

            if(value){
                res.send({statusCode:200,
                    status:"User Found",
                    data:value
                })
    
            }else{throw new Error("Invalid Id")}
        }catch(err){
            next(err);
        }


    }

    async updateById(req:Request,res:Response,next:NextFunction){
        
        const value = await student.findByIdAndUpdate(req.params.id,{name:"DEF"},{new:true});

        try{

            if(value){
    
                res.send({statusCode:200,
                    status:"User Updated",
                    data:value
                })
    
                
            }else{throw new Error("Invalid Id")}
        }catch(err){
            next(err);
        }

    }

    async DeleteById(req:Request,res:Response,next:NextFunction){
        const value = await student.findByIdAndDelete(req.params.id);

        try{

            if(value){
                res.send({statusCode:200,
                    status:"Successfully Deleted",
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
        res.send({statusCode:200,
            status:"Data fetched Successfully",
            data:value
        })
        
    }

    async getStudentByPagenation(req:Request,res:Response){

        const page = parseInt(req.query.page as string) 
        const limit = parseInt(req.query.limit as string) 
        const sortBy = (req.query.sortBy as string) || "createdAt";
        const order = (req.query.order as string) === "desc" ? -1 : 1;

        const skipped = (page - 1) * limit;
        const value = await student.find({}).skip(skipped).limit(limit).sort({ [sortBy]: order })
        res.send({statusCode:200,
            status:"Data fetched Successfully",
            data:value
        })

    }

}

export const studdentController = new StudentController