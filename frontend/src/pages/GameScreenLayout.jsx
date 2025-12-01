import React from 'react'
import { Outlet } from 'react-router'
import Title from '../components/Title'
import GamePanel from '../components/Main/GamePanel'

function GameScreenLayout() {
  return (
    <div className="w-full h-screen bg-(--background) text-(--text-color) flex flex-col justify-top ">
        <Title></Title>
        <div className='w-full h-full p-5 flex flex-col'>
          <GamePanel></GamePanel>
          <Outlet/>
        </div>
    </div>
  )
}

export default GameScreenLayout