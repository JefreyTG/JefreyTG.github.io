// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services'
import Videos from './components/Videos';
import Projects from './components/Projects';
const App = () => {
  return (
   
    <Router>
        <Header/>
        <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/videos' element={<Videos />}/>
        <Route path='/projects' element={<Projects />}/>
        </Routes>
    
    </Router>
  );
};

export default App;
