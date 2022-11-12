import React from 'react';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from '../Pages/AboutPage/AboutPage';
import HomePage from '../Pages/HomePage/HomePage';

export default function Router (){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/test" element={<div>test</div>} />
        <Route path="/junk" element={<div>junk</div>} />
      </Routes>
    </BrowserRouter>
  )
}