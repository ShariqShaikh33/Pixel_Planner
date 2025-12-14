import { createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "./authInitialState";

export const authSlice=createSlice({
    name: "Auth",
    initialState:authInitialState,
    reducers:{
        setUser:(state,action)=>{
            return{...state.user,...action.payload};
        },
        setAuthProperty: (state, action)=>{
            const {key, value} = action.payload;
            state[key] = value;
        }
    }
})

export const {setUser,setAuthProperty} = authSlice.actions;
export default authSlice.reducer;