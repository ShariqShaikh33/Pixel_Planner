import { Router } from "express";
import authMiddleware from "../middleware/auth.js"
import { addTask, getTaskList } from "../controllers/taskControllers/index.js";

export const taskRoutes = Router();

// taskRoutes.get("/gettask/:id",authMiddleware,getTask);
taskRoutes.post("/addtask",authMiddleware,addTask);
taskRoutes.get("/gettasklist",authMiddleware,getTaskList);
// taskRoutes.delete("/deletetask",deleteTask);
