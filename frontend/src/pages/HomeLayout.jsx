import GamePanel from "../components/Main/GamePanel/index.jsx"
import BottomPanel from '../components/Main/BottomPanel/index.jsx'
import TimePanel from '../components/Main/TimePanel/index.jsx'
import Title from "../components/Title/index.jsx"

function HomeLayout() {
  return (
    <>
      <div className="w-full h-screen bg-(--background) text-(--text-color) flex flex-col justify-between ">
        <Title></Title>
        <div className='w-full h-[95%] p-5 flex flex-col justify-between'>
          <GamePanel></GamePanel>
          <TimePanel></TimePanel>
          <BottomPanel></BottomPanel>
        </div>
      </div>
    </>
  )
}

export default HomeLayout