import mongoose, { Schema } from "mongoose";


export const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        },
        charsprite: {
            type: String,
        },
        exp: {
            type: Number,
            required: true,
        },
        level:{
            type: Number,
            required: true,
        }
    },{
        timestamps: true,
    }
)

export const User = mongoose.model("User", UserSchema);
