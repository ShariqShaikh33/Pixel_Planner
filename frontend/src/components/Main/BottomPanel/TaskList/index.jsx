import React from 'react'
import CustomButton from '../../../common/CustomButton'
import { useNavigate } from 'react-router'
import TaskCard from './TaskCard';
import { useSelector } from 'react-redux';
import { taskListSelector } from '../../../../store/Slices/TaskList/taskListSelector';
import { useEffect } from 'react';
import { getTaskAPI } from '../../../../api/taskApi';
import { useState } from 'react';

function TaskList() {
  const [tasklist,setTasklist] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    const fetchTaskList = async()=>{
      try{
        const response = await getTaskAPI();
        setTasklist(response.tasklist);
      }
      catch (error){
        console.log("EEEE",error);
      }
    }
    fetchTaskList().then(()=>console.log(tasklist));
  },[ ])
  const handleAddTask=()=>{
    navigate("/home/taskform");
  }
  return (
    <div className='panel w-[30%] h-full flex flex-col justify-between items-center'>
      <div className='w-full h-75 flex flex-col overflow-y-auto gap-2 p-1'>
        {
          tasklist.map((e)=>{
            return <TaskCard key={e.createdAt} title={e.title} time={e.deadline} description={e.description}/>
          })
        }
      </div>
      <CustomButton className="w-full" onClick={()=>handleAddTask()} text="Add Task" />
    </div>
  )
}

export default TaskList