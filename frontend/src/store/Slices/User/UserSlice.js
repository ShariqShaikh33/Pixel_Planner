import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "./Userinitialstate";

export const UserSlice = createSlice({
    name: 'User',
    initialState: userInitialState,
    reducers:{
        setUser:(state,action)=>{
            return{...state,...action.payload};
        },
        setUserProperty: (state, action)=>{
            const {key, value} = action.payload;
            state[key] = value;
        }
    }
})

export const {setUser,setUserProperty} = UserSlice.actions;
export default UserSlice.reducer;