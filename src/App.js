// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
   
    <Router>
        <Header/>
        <Routes>
        <Route path='/home' element={<Home/>} />
        </Routes>
    
    </Router>
  );
};

export default App;
