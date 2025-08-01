import { Router } from "express";
import { studdentController } from "../../Controllers/StudentController";
import { validation } from "../../Middlewares/ValidationMiddleware";

export const updateStudentById = Router();

updateStudentById.get("/getById",validation,studdentController.updateById);