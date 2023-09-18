import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import "./App.css";
import One from './components/One';
import moviesData from "./Data";

const App = () => {
  const [movies,setMovies]=useState(moviesData)
  return (
    <div>
      <BrowserRouter>
      <Routes>
<Route  path='/' element={<Home/>}   />
<Route  path='movies/:id' element={<One movies={movies}/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
