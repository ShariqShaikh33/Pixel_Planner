import React from 'react'
import CustomLabelandText from '../common/inputs/CustomLabelandInput'
import { useDispatch, useSelector } from 'react-redux';
import { setUserName } from '../../store/Slices/User/UserSlice';
import { userSelector } from '../../store/Slices/User/userSelector';

function LoginPanel() {
  const dispatch = useDispatch();
  const {name, password} = useSelector(userSelector);

  const handlechange = (key, value) =>{
    dispatch(setUserName({key,value}));
  };

  return (
    <div className='w-full h-50 flex flex-col justify-evenly items-center'>
        <CustomLabelandText id="name" 
          type="text" 
          text="Username" 
          placeholder="Enter your Name"
          value = {name}
          onChange={(value)=>handlechange("name", value)}  
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