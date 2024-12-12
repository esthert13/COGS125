import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Tae Portfolio</h1>
      <ul className="navbar-menu">
        <li><Link to="/COGS125">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;