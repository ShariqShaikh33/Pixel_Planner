import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './Slices/User/UserSlice';

export const store = configureStore({
    reducer:{
        user: UserSlice,
    }
});