import { Router } from "express";
import { addingStudent } from "../../Middlewares/addStudent";
import { studdentController } from "../../Controllers/StudentController";
import { validation } from "../../Middlewares/ValidationMiddleware";

export const Student = Router();

Student.post("/students",validation,addingStudent,studdentController.adding);

Student.delete("/students/:id",validation,studdentController.DeleteById);

Student.get("/students",validation,studdentController.getStudentByPagenation);

Student.get("/students/:id",validation,studdentController.gettingById);

Student.put("/students/:id",validation,studdentController.updateById);

Student.get("/studentsByQuery",validation,studdentController.getByQuery);








