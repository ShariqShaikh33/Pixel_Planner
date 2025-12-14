import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CustomLabelandText from '../common/CustomLabelandInput';
import { authSelector } from '../../store/Slices/Auth/authSelector';
import { setAuthProperty } from '../../store/Slices/Auth/authSlice';

function SignupPanel() {
  const dispatch = useDispatch();
  const {username, password, charsprite} = useSelector(authSelector);

  const handlechange = (key, value) =>{
    dispatch(setAuthProperty({key,value}));
  };

  return (
    <div className='w-[50%] h-50 flex flex-col justify-evenly items-center'>         
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
          value={password}
          onChange={(value)=>handlechange("password", value)}
        />
    </div>
  )
}

export default SignupPanel