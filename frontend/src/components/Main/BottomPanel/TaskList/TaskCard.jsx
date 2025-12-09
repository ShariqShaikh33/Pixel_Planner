import React, { useState } from 'react'

function TaskCard(props) {
    const [expanded,setexpanded] = useState(false);
    const {title,description, time} = props
    const handleexpand = (expanded)=>{
      setexpanded(!expanded);
      console.log("clicked",expanded);
    }
  return (
    <div
      onClick={()=>handleexpand(expanded)} 
      className={`h-${expanded ? "50" : "10"} border w-full shrink-0 pl-2 pr-2 overflow-hidden flex flex-col gap-2 pt-1 justify-between items-top`}>
        <div className='flex w-full justify-between'>
          <div>
            {title}
          </div>
          <div>
            {time}
          </div>
        </div>
        <div>
          <div>{description}</div>
        </div>

    </div>
  )
}

export default TaskCard