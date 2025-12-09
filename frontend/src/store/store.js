import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './Slices/User/UserSlice';
import TaskListSlice from './Slices/TaskList/TaskListSlice';
import TaskSlice from './Slices/Task/TaskSlice';

export const store = configureStore({
    reducer:{
        user: UserSlice,
        task: TaskSlice,
        tasklist: TaskListSlice,
    }
});