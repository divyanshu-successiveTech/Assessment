import { Router } from "express";
import { addingStudent } from "../../Middlewares/addStudent";
import { studdentController } from "../../Controllers/StudentController";
import { addingUnsecureLOGIN } from "../../Middlewares/UnsecureMiddleware/LoginStudent";

export const loginStudent = Router();

loginStudent.post("/add",addingUnsecureLOGIN);
