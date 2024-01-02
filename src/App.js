// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services'

const App = () => {
  return (
   
    <Router>
        <Header/>
        <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/services' element={<Services />} />
        </Routes>
    
    </Router>
  );
};

export default App;
