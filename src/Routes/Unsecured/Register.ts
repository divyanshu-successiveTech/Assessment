import { Router } from "express";
import { studdentController } from "../../Controllers/StudentController";
import { addingUnsecureStudent } from "../../Middlewares/UnsecureMiddleware/addingUnsecure";

export const registerStudent = Router();

registerStudent.post("/add",addingUnsecureStudent,studdentController.adding);
