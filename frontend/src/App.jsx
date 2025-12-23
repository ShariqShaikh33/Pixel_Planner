import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import {Provider, useSelector} from 'react-redux';
import HomeLayout from './pages/HomeLayout'
import GameScreenLayout from './pages/GameScreenLayout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { store } from './store/store';
import TaskForm from './pages/DynamicPanel/TaskForm';
import HomeClock from './pages/DynamicPanel/HomeClock';

function App() {

  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<GameScreenLayout/>}> 
          <Route path="login" element={<Login/>}></Route>
          <Route path="signup" element={<Signup/>}></Route>
          <Route path="home" element={<HomeLayout/>}>
            <Route path="clock" element={<HomeClock/>}/>
            <Route path="taskform" element={<TaskForm/>}></Route>
          </Route>
        </Route>
      </Routes>
    </Router>
    </Provider>
  )
}

export default App
