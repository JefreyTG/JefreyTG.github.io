// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js'
import Home from './components/Home';
import Services from './components/Services'
import Videos from './components/Videos';
import Projects from './components/Projects';
const App = () => {
  return (
   
    <Router>
      <Header/>
        
        <Routes>
        
        <Route path='./components/Home.js' element={ <Home />} />
        <Route path='./components/Services.js' element={<Services />} />
        <Route path='./components/Videos.js' element={<Videos />}/>
        <Route path='./components/Projects.js' element={<Projects />}/>
        </Routes>
    
      
       
    </Router>
  );
};

export default App;
