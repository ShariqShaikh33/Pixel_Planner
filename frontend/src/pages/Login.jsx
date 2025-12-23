import React from 'react'
import LoginPanel from '../components/LoginPanel'
import CustomButton from '../components/common/CustomButton'
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../store/Slices/User/userSelector';
import { loginAPI } from '../api/userApi';
import { useNavigate } from 'react-router';
import { setUser, setUserProperty } from '../store/Slices/User/UserSlice';
import { authSelector } from '../store/Slices/Auth/authSelector';

function Login() {
  const navigate = useNavigate();
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
  const username = auth.username;
  const password = auth.password;

  const handleLogin= async(username,password)=>{
    console.log("LOGIN")
    const result = await loginAPI(username,password);
    const resUser = result.user;
    if(result.error){
      console.log("Login Failed", result.error);
    }
    else{
      dispatch(setUser(resUser))
      localStorage.setItem("token",result.token);
      localStorage.setItem("user",JSON.stringify(resUser));
      navigate("/home/clock");
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