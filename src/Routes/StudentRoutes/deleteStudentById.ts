import { Router } from "express";
import { studdentController } from "../../Controllers/StudentController";
import { validation } from "../../Middlewares/ValidationMiddleware";

export const DeleteStudentById = Router();

DeleteStudentById.get("/getById",validation,studdentController.DeleteById);