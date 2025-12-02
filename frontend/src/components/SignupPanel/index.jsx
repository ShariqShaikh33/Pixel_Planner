import React from 'react'
import CustomLabelandText from '../common/inputs/CustomLabelandInput'
import { setUserName } from '../../store/Slices/User/UserSlice'
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../store/Slices/User/userSelector';

function SignupPanel() {
  const dispatch = useDispatch();
  const {username, password, charsprite} = useSelector(userSelector);

  const handlechange = (key, value) =>{
    dispatch(setUserName({key,value}));
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