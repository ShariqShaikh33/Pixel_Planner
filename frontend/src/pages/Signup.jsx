import React from 'react'
import LoginPanel from '../components/LoginPanel'
import CustomButton from '../components/common/CustomButton'
import SignupPanel from '../components/SignupPanel'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from '../store/Slices/User/userSelector'
import { signupAPI } from '../api/userApi'
import { setUser } from '../store/Slices/User/UserSlice'
import { useNavigate } from 'react-router'

function Signup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(userSelector);
  const username = user.username;
  const password = user.password;

  const handlesignup= async(username,password)=>{
    const result = await signupAPI(username,password);
    if(result.error){
      console.log("Signup Failed", result.error);
    }
    else{
          dispatch(setUser({
            username: result.user.username,
            level: result.user.level,
            exp: result.user.exp,
          }))
          navigate("/home");
    }
  }
  return (
    <div className='w-full h-full flex justify-center items-center' >
        <div className='w-[50%] h-[80%] border flex flex-col justify-evenly items-center'>
          <div className='w-full flex justify-evenly items-center'>
            <div className='border flex justify-center items-center w-[30%] h-50'>
              char 1
            </div>
            <SignupPanel/>
          </div>

          <CustomButton text="Sign Up" onClick={()=>handlesignup(username,password)} className={"border"}/>
        
        </div>
    </div>
  )
}

export default Signup