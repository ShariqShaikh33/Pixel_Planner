import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './Slices/User/UserSlice';
import TaskListSlice from './Slices/TaskList/TaskListSlice';
import TaskSlice from './Slices/Task/TaskSlice';
import authSlice from './Slices/Auth/authSlice';

export const store = configureStore({
    reducer:{
        auth: authSlice,
        user: UserSlice,
        task: TaskSlice,
        tasklist: TaskListSlice,
    }
});