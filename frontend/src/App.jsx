import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes } from 'react-router'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homme/>}> </Route>
      </Routes>
    </Router>
  )
}

export default App
