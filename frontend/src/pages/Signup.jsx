import React from 'react'
import LoginPanel from '../components/LoginPanel'
import CustomButton from '../components/common/CustomButton'
import SignupPanel from '../components/SignupPanel'

function Signup() {
  return (
    <div className='w-full h-full flex justify-center items-center' >
        <div className='w-[50%] h-[80%] border flex flex-col justify-evenly items-center'>
          <div className='w-full flex justify-evenly items-center'>
            <div className='border flex justify-center items-center w-[30%] h-50'>
              char 1
            </div>
            <SignupPanel/>
          </div>

          <CustomButton text="Sign Up" onClick={()=>console.log("Sign Up")} className={"border"}/>
        
        </div>
    </div>
  )
}

export default Signup