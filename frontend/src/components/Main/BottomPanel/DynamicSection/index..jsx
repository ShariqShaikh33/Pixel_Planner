import React from 'react'
import { Outlet } from 'react-router'

function DynamicPanel() {
  return (
    <div className='bg-(--background) w-[38%] h-full flex justify-center items-center'>
      <Outlet/>
    </div>
  )
}

export default DynamicPanel