import { User } from "../../models/User/UserSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


export const signupUser = async(req,res)=>{
    try{
        console.log("REQ>BODY",req.body);
        const {username, password} = req.body;
        const existing = await User.findOne({username});
        if(existing){
            return res.status(400).json({error:"Username already taken"});
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await User.create({
            username,
            password: hashedPassword,
            exp: 0,
            level: 1,
        });

        const token = jwt.sign(
            {id: newUser._id},
            process.env.JWT_SECRET,
        );

        return res.json({
            message: "Signup successful",
            token,
            user:{
                username: newUser.username,
                level: newUser.level,
                exp: newUser.exp,
            },
        });

    }catch(err){
        res.status(500).json({error:err.message});
    }
}

export const loginUser = async(req,res)=>{
    try{
        const {username, password} = req.body;
        console.log(req.body)

        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({error: "User Not found"});
        }
        const passMatch = await bcrypt.compare(password,user.password);
        if(!passMatch){
            return res.status(401).json({error: "Invalid Password"});
        }
        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        )

        return res.json({
            message: "Login Successful",
            token,
            user:{
                username: user.username,
                level: user.level,
                exp: user.exp
            }
        })
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
};