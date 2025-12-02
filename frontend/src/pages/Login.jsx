import React from 'react'
import LoginPanel from '../components/LoginPanel'
import CustomButton from '../components/common/CustomButton'
import { useSelector } from 'react-redux';
import { userSelector } from '../store/Slices/User/userSelector';
import { loginAPI } from '../api/userApi';

function Login() {
  
  const user = useSelector(userSelector);
  const username = user.username;
  const password = user.password;

  const handleLogin= async(username,password)=>{
    console.log("LOGIN")
    const result = await loginAPI(username,password);
    if(result.error){
      console.log("Login Failed", result.error);
    }
    else{
      console.log("Login Successful",result);
    }
  }

  return (
    <div className='w-full h-full flex justify-center items-center' >
        <div className='w-[30%] h-[80%] border flex flex-col justify-evenly items-center'>
            <LoginPanel/>
            <CustomButton text="Login" onClick={()=>handleLogin(username,password)} className={"border"}/>
        </div>
    </div>
  )
}

export default Login