import { Router } from "express";
import { studdentController } from "../../Controllers/StudentController";
import { validation } from "../../Middlewares/ValidationMiddleware";

export const getStudentById = Router();

getStudentById.get("/getById/:id",validation,studdentController.gettingById);