import React from 'react'
import CustomButton from '../../../common/CustomButton'
import { useNavigate } from 'react-router'
import TaskCard from './TaskCard';
import { useSelector } from 'react-redux';
import { taskListSelector } from '../../../../store/Slices/TaskList/taskListSelector';

function TaskList() {
  const tasklist = useSelector(taskListSelector)
  const navigate = useNavigate();
  
  const handleAddTask=()=>{
    navigate("/home/taskform");
  }
  return (
    <div className='bg-(--background) w-[30%] h-full flex flex-col justify-between items-center'>
      <div className='border w-full h-75 flex flex-col overflow-y-auto gap-2 p-1'>
        {
          tasklist.list.map((e)=>{
            return <TaskCard key={e.createdAt} title={e.title} time={e.deadline} description={e.description}/>
          })
        }
      </div>
      <CustomButton className="border w-full h-10" onClick={()=>handleAddTask()} text="Add Task" />
    </div>
  )
}

export default TaskList