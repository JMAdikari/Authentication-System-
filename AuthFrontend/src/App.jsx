import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'; 


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
