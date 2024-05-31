import React, { useState } from "react";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';


// src/App.js
import React from 'react';
import '../public/navbar.css';
import Navbar from './components/Navbar.js';
import Homepage from './components/Homepage.js';
import Experience from './components/Experience.js';
import Bio from './components/Bio.js';
import Portfolio from './components/Portfolio.js';

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar />
            <Content />
            {/* Other components and content */}
        </div>
    </Router>
  );
}

const Content = () => {
    const location = useLocation();

    return (
        <div>
          {location.pathname === '/' && <Homepage />}
          {location.pathname === '/Bio' && <Bio />}
          {location.pathname === '/Experience' && <Experience />}
          {location.pathname === '/Portfolio' && <Portfolio />}
        </div>
      );
    };


export default App;