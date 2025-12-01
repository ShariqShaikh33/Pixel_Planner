import GamePanel from "../components/Main/GamePanel/index.jsx"
import BottomPanel from '../components/Main/BottomPanel/index.jsx'
import TimePanel from '../components/Main/TimePanel/index.jsx'
import Title from "../components/Title/index.jsx"

function HomeLayout() {
  return (
    <>
        <div className='w-full h-full border border-amber-500 flex flex-col justify-evenly'>
          <TimePanel></TimePanel>
          <BottomPanel></BottomPanel>
        </div>
    </>
  )
}

export default HomeLayout