import React from 'react';
import CustomLabelandText from '../../components/common/CustomLabelandInput/index.jsx';
import CustomLabelandArea from '../../components/common/CustomLabelandArea/index.jsx';
import CustomLabelandSelect from '../../components/common/CustomLabelandSelect/index.jsx';
import CustomButton from '../../components/common/CustomButton/index.jsx';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { taskSelector } from '../../store/Slices/Task/taskSelector.js';
import { resetTask, setTaskProperty } from '../../store/Slices/Task/TaskSlice.js';
import { addTask } from '../../store/Slices/TaskList/TaskListSlice.js';
import { addTaskAPI } from '../../api/taskApi.js';
function TaskForm() {
  const options = [
    {optionid: "easy", option: "Easy"},
    {optionid: "medium", option: "Medium"},
    {optionid: "hard", option: "Hard"},
  ]

  const newtask = useSelector(taskSelector);
  const {title, description, difficulty, deadline} = useSelector(taskSelector);
  const dispatch = useDispatch();

  const handleXpChange=(difficulty)=>{
    let key="xpReward";
    let value = 10;
    console.log(difficulty);
    switch (difficulty){
      case "Easy":
        value = 10;
        break;
      case "Medium":
        value = 20;
        break;
      case "Hard":
        value = 30;
        break;
      default:
        value = 10
    }
    console.log(value);
    dispatch(setTaskProperty({key,value}));
  }

  const handleCreatedAt = ()=>{
      let key = "createdAt";
      const timestamp = Date.now();
      const dateObject = new Date(timestamp);
      const value = dateObject.toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
      });
      console.log(value); // Example: "December 4, 2025, 01:08:00 PM"
      dispatch(setTaskProperty({key,value}));
      return value;
  }

  const handlechange = (key, value) =>{
    dispatch(setTaskProperty({key,value}));
    if(key=="difficulty"){
      handleXpChange(value);
    }
  };
  const handleSubmit=async (newTask)=>{
    const createdAt = handleCreatedAt();
    const Tasktosend = {...newTask,createdAt}
    const addedtask = await addTaskAPI(Tasktosend);
    if(addedtask.error){
      console.log("Error in adding task",addedtask.error);
    }
    else{
      dispatch(addTask(addedtask));
      dispatch(resetTask());
    }

  }

  return (
    <div className='w-full h-full'>
      <div className='border w-full h-[80%] flex flex-col justify-evenly items-center'>
        <CustomLabelandText id={"title"} value={newtask.title} text="Title" type="text" placeholder="Task Title" onChange={(value)=>handlechange("title",value)}/>
        <CustomLabelandSelect id={"difficulty"} value={difficulty} text={"Difficulty"} options={options} onChange={(value)=>handlechange("difficulty",value)} />
        <CustomLabelandText id={"deadline"} value={deadline} text={"Deadline"} type={"time"} onChange={(value)=>handlechange("deadline",value)}/>
        <CustomLabelandArea id={"description"} value={description} text="Description" type="text" placeholder="Description" onChange={(value)=>handlechange("description",value)}/>
      </div>
      <CustomButton onClick={()=>handleSubmit(newtask)} text={"Add Task"}></CustomButton>
    </div>
  )
}

export default TaskForm