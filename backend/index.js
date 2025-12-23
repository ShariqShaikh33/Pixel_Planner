import {config} from "dotenv";
import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import {userRoutes} from "./routes/userRoutes.js"
import { taskRoutes } from "./routes/taskRoutes.js";

config();

const app = express();
app.use(express.json());
app.use(cors());

connect(process.env.MONGO_URI)
.then(()=>console.log("MONGODB connected"));


app.use("/api/user", userRoutes);
app.use("/api/user/task", taskRoutes);

app.get("/", (req,res)=>{
    res.json("Pixel Planner API is up.")
});

const PORT = process.env.PORT;
app.listen(PORT, ()=>
    console.log(`Server Running on port ${PORT}`)
);