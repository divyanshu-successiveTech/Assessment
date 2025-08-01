import { Router } from "express";
import { addStudent } from "./StudentRoutes/addStudent";
import { getStudentById } from "./StudentRoutes/getStudentById";
import { updateStudentById } from "./StudentRoutes/updateStudent";
import { DeleteStudentById } from "./StudentRoutes/deleteStudentById";
import { getStudentByQuery } from "./StudentRoutes/getStudentByQuery";
import { loginStudent } from "./Unsecured/Login";
import { registerStudent } from "./Unsecured/Register";
import { getStudentAndPagination } from "./StudentRoutes/getAllPagination";

export const AllRouter = Router();

AllRouter.use(addStudent);
AllRouter.use(getStudentById);
AllRouter.use(updateStudentById);
AllRouter.use(DeleteStudentById);
AllRouter.use(getStudentByQuery);
AllRouter.use(loginStudent);
AllRouter.use(registerStudent);
AllRouter.use(getStudentAndPagination);




