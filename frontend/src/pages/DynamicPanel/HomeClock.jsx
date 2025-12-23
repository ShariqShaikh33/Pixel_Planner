import React, { useEffect, useState } from 'react'

function HomeClock() {
    const [time, setTime]=useState(new Date);
    useEffect(()=>{
        const intervalId  = setInterval (()=>{
            setTime(new Date);
        },1000);
        return ()=>{
            clearInterval(intervalId);
        }    
    },[]);

    function formatTime(){
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();
        return (`${hour}:${minute}:${second}`);
    }
    function formatDate(){
        let date = time.getDate();
        let month = time.getMonth();
        let year = time.getFullYear();
        return (`${date}/${month}/${year}`)
    }
  return (
    <div className='w-full h-full'>
        <div className='border w-full h-25'>
            <p>{formatTime()}</p>
            <p>{formatDate()}</p>
        </div>
    </div>
  )
}

export default HomeClock