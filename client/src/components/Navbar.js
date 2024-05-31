// src/Navbar.js
import React, { useState } from 'react';
import '../../public/navbar.css'; // Import the CSS for styling

const Navbar = () => {
    const [sillyMode, setSillyMode] = useState(false);

    function toggleSillyMode () {
        setSillyMode(!sillyMode);
    }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Michael Henderson</a>
      </div>
      <button id = "toggleButton" onClick = {toggleSillyMode}>{sillyMode ? "Regular Mode" : "Silly Mode"}</button>
      <ul className= {sillyMode ? "silly-links" : "navbar-links"}>
        <li><a href="/">Home</a></li>
        <li><a href="/Bio">Bio</a></li>
        <li><a href="/Experience">Experience</a></li>
        <li><a href="/Portfolio">Portfolio</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;