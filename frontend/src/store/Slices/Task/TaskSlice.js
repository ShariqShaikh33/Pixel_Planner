import { createSlice } from "@reduxjs/toolkit";
import { taskInitialState } from "./taskInitialState";

export const TaskSlice = createSlice({
    name: "Task",
    initialState: taskInitialState,
    reducers:{
        setTaskProperty:(state, action)=>{
            const {key, value} = action.payload;
            state[key] = value;
        },
        resetTask:()=>taskInitialState,
    }
})
export const {setTaskProperty, resetTask} = TaskSlice.actions;
export default TaskSlice.reducer;