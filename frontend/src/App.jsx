import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import HomeLayout from './pages/HomeLayout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout/>}> </Route>
      </Routes>
    </Router>
  )
}

export default App
