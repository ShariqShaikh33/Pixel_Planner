import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import {Provider} from 'react-redux';
import HomeLayout from './pages/HomeLayout'
import GameScreenLayout from './pages/GameScreenLayout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<GameScreenLayout/>}> 
          <Route path="login" element={<Login/>}></Route>
          <Route path="signup" element={<Signup/>}></Route>
          <Route path="home" element={<HomeLayout/>}></Route>
        </Route>
      </Routes>
    </Router>
    </Provider>
  )
}

export default App
