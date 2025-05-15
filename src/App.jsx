import React, { useState } from 'react';
import './App.css';
import logoImg from './components/imgs/Untitled design (22).png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <a href="#home" className="logo-link">
            <img src={logoImg} alt="Eterna Logo" className="logo-image" />
            <span className="brand-name" style={{
              fontFamily: '"Press Start 2P", cursive, monospace',
              fontSize: '1rem',
              letterSpacing: '0.05em'
            }}>Eterna</span>
          </a>
        </div>

        {/* Navigation Links - unchanged */}
        <div className={`nav-links ${open ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#footer">Contact us</a>
        </div>

        {/* Mobile Menu Toggle - unchanged */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;