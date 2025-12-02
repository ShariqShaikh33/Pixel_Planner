import { Router } from "express";
import { loginUser, signupUser } from "../controllers/userControllers/index.js";

export const userRoutes = Router();

userRoutes.post("/signup", signupUser);
userRoutes.post("/login", loginUser);
