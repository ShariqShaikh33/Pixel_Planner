import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUserProperty } from '../../store/Slices/User/UserSlice';
import { userSelector } from '../../store/Slices/User/userSelector';
import CustomLabelandText from '../common/CustomLabelandInput';
import { authSelector } from '../../store/Slices/Auth/authSelector';
import { setAuthProperty } from '../../store/Slices/Auth/authSlice';

function LoginPanel() {
  const dispatch = useDispatch();
  const {username, password} = useSelector(authSelector);

  const handlechange = (key, value) =>{
    dispatch(setAuthProperty({key,value}));
  };

  return (
    <div className='w-full h-50 flex flex-col justify-evenly items-center'>
        <CustomLabelandText id="username" 
          type="text" 
          text="Username" 
          placeholder="Enter your Name"
          value = {username}
          onChange={(value)=>handlechange("username", value)}  
        />
        <CustomLabelandText id="password" 
          type="password" 
          text="Password" 
          placeholder="Enter your Password"
          value = {password}
          onChange={(value)=>handlechange("password", value)}
        />
    </div>
  )
}

export default LoginPanel