import React from 'react'
import CustomLabelandText from '../common/inputs/CustomLabelandInput'

function LoginPanel() {
  return (
    <div className='w-full h-50 flex flex-col justify-evenly items-center'>
        <CustomLabelandText id="name" type="text" text="Name" placeholder="Enter your Name"/>
        <CustomLabelandText id="password" type="password" text="Password" placeholder="Enter your Password"/>
    </div>
  )
}

export default LoginPanel