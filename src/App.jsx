import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from './Pages/Home'
import Destination from './Pages/Destination'


function App() {


  return (
    <>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/destination" element={ <Destination/> } />
      </Routes>
     
    </>
  )
}

export default App
