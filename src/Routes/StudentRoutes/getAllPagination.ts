import { Router } from "express";
import { studdentController } from "../../Controllers/StudentController";
import { validation } from "../../Middlewares/ValidationMiddleware";

export const getStudentAndPagination = Router();

getStudentAndPagination.get("/getById",validation,studdentController.getStudentByPagenation);