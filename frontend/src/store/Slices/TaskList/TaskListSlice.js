import { createSlice } from "@reduxjs/toolkit";
import { tasklistInitialState } from "./tasklistInitialState.js";

export const TaskListSlice = createSlice({
    name: "TaskList",
    initialState: tasklistInitialState,
    reducers:{
        addTask:(state, action)=>{
            state.list.push(action.payload);
        },
        deleteTask:(state,action)=>{
            state.list = state.list.filter(t => t._id !== action.payload);
            }
        },
    }
);
export const {addTask, deleteTask} = TaskListSlice.actions;
export default TaskListSlice.reducer;