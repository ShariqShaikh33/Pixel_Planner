import { Task } from "../../models/Task/TaskSchema.js";

// export const getTask = async(req,res)=>{
//     try{
//         const userId = req.user.id;
//         const task = await Task.findById({userId});
//         if(!task){
//             return res.status(404).json({message:"Task not found"});
//         }
//         return res.status(200).json(task);
//     }
//     catch(error){
//         console.error("Error fetching task: ",error);
//         return res.status(500).json({message: "Server Error"});
//     }
// }

export const addTask = async(req,res)=>{
    try{
        const {title,description,difficulty,deadline,completed,xpReward,createdAt} = req.body;
        if(!title){
            return res.status(400).json({message: "Title is required"});
        }
        const newtask = await Task.create({
             title: title,
             description: description,
             difficulty: difficulty,
             deadline: deadline,
             completed: completed,
             xpReward: xpReward,
             userId: req.user.id,
             createdAt: createdAt
        });
        return res.status(200).json(newtask);
    }
    catch(error){
        console.error("Error adding task: ",error);
        return res.status(500).json({message: "Server Error"});
    }
}

export const getTaskList = async (req,res)=>{
    try{
        console.log(req);
        const userId = req;
        const tasklist = await Task.find({userId});
        return res.status(200).json({success:true, tasklist})
    }
    catch(error){
        console.error("Error fetching tasks",error);
        res.status(500).json({error: "Server error"})
    }
};