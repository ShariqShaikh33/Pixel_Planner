import React from 'react'
import UserSection from './UserSection'
import DynamicPanel from './DynamicSection/index.'
import TaskList from './TaskList'

function BottomPanel() {
  return (
    <div className='bg-(--secondary) w-full h-[85%] p-2 flex justify-between items-center'>
      <UserSection></UserSection>

      <DynamicPanel></DynamicPanel>

      <TaskList></TaskList>
    </div>
  )
}

export default BottomPanel