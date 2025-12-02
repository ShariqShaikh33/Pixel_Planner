import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "./Userinitialstate";

export const UserSlice = createSlice({
    name: 'User',
    initialState: userInitialState,
    reducers:{
        setUserName: (state, action)=>{
            const {key, value} = action.payload;
            state[key] = value;
        }
    }
})

export const {setUserName} = UserSlice.actions;
export default UserSlice.reducer;