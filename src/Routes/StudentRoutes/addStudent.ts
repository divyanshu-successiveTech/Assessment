import { Router } from "express";
import { addingStudent } from "../../Middlewares/addStudent";
import { studdentController } from "../../Controllers/StudentController";
import { validation } from "../../Middlewares/ValidationMiddleware";

export const addStudent = Router();

addStudent.post("/add",validation,addingStudent,studdentController.adding);
