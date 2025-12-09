import mongoose, { Schema } from "mongoose";

export const TaskSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
        },
        difficulty:{
            type: String,
            enum: ["Easy","Medium","Hard"],
            default: "Easy",
        },
        deadline:{
            type: String,
            required: false,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        xpReward: {
            type: Number,
        },
        userId:{
            type:String,
        },
        createdAt:{
            type: String,
        }
    }
)

export const Task = mongoose.model("Task", TaskSchema);