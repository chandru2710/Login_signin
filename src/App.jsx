import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import Login from './Components/Login';
import Headboard from './Components/Home/Headboard';
import Signup from './Components/Signup';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/home' element={<Headboard></Headboard>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
