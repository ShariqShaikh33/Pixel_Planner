import React from 'react'
import { useSelector } from 'react-redux'
import { userSelector } from '../../../../store/Slices/User/userSelector'

function UserSection() {
  const {username, charsprite, level, exp} = useSelector(userSelector)
  return (
    <div className='panel w-[30%] h-full flex flex-col justify-between items-center'>
      <div className='w-full h-[40%] flex justify-evenly items-center'>
        <div className='border h-[80%] w-[25%]'>
          {charsprite}
        </div>
        <div className='border h-[80%] w-[70%] flex flex-wrap justify-evenly items-center'>
          <div className='border w-[40%] h-[40%]'>
            {username}
          </div>
          <div className='border w-[40%] h-[40%]'>
            health
          </div>
          <div className='border w-[40%] h-[40%]'>
            {level}
          </div>
          <div className='border w-[40%] h-[40%]'>
            {exp}
          </div>
        </div>
      </div>  
      <div className='border w-full h-[60%] flex justify-center items-baseline '>
        <div className='title w-30 flex justify-center items-center'>Log</div>
      </div>
    </div>
  )
}

export default UserSection