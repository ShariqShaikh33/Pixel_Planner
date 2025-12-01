import React from 'react'
import LoginPanel from '../components/LoginPanel'
import CustomButton from '../components/common/CustomButton'

function Login() {
  return (
    <div className='w-full h-full flex justify-center items-center' >
        <div className='w-[30%] h-[80%] border flex flex-col justify-evenly items-center'>
            <LoginPanel/>
            <CustomButton text="Login" onClick={()=>console.log("Login")} className={"border"}/>
        </div>
    </div>
  )
}

export default Login