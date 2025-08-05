import { Router } from "express";
import { Student } from "./StudentRoutes/StudentRoutes";
import { userRouter } from "./Unsecured/userRoutes";

export const AllRouter = Router();

AllRouter.use(Student);
AllRouter.use(userRouter)



