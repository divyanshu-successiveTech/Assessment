import express ,{Request,Response,NextFunction}from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { AllRouter } from "./Routes/AllRoutes";
import { errorHandler } from "./Middlewares/errorHandler";
dotenv.config()

const app = express();
const port = 3000;

app.use(express.json());



mongoose.connect("mongodb://localhost:27017/TrialDB");

app.use("/",AllRouter)//For all the given routes or internal mapping of routes

app.use(errorHandler);//This is the global error handler middleware

app.listen(port,()=>{
    console.log("running")
})



