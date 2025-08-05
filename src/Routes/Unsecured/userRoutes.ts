import { Router } from "express";
import { addingUnsecureLOGIN } from "../../Middlewares/UnsecureMiddleware/LoginStudent";
import { addingUnsecureStudent } from "../../Middlewares/UnsecureMiddleware/addingUnsecure";
import { studdentController } from "../../Controllers/StudentController";

export const userRouter = Router();

userRouter.post("/login",addingUnsecureLOGIN);

userRouter.post("/add",addingUnsecureStudent,studdentController.adding);
