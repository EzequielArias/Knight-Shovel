import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Leaders from './pages/Leaders';
import Rules from './pages/Rules';
import Activities from './pages/Activities';
import Navbar from '../src/components/Navbar/Navbar'

//https://shovelknights.wixsite.com/wolvesville

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/leaders' element={<Leaders/>}/>
        <Route path='/rules' element={<Rules/>}/>
        <Route path='/activities' element={<Activities/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;