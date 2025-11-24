import {config} from "dotenv";
import express,{json} from "express";
import cors from "cors";
import { connect } from "mongoose";


config();

const app = express();
app.use(json());
app.use(cors());

connect(process.env.MONGO_URI)
.then(()=>console.log("MONGODB connected"));

app.get("/", (req,res)=>{
    res.json("Pixel Planner API is up.")
});

const PORT = process.env.PORT;
app.listen(PORT, ()=>
    console.log(`Server Running on port ${PORT}`)
);