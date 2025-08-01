import { Router } from "express";
import { studdentController } from "../../Controllers/StudentController";
import { validation } from "../../Middlewares/ValidationMiddleware";

export const getStudentByQuery = Router();

getStudentByQuery.get("/getById",validation,studdentController.getByQuery);