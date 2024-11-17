import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#f2f2f2', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={{ marginRight: '10px' }}>
          <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
        </li>
        <li style={{ marginRight: '10px' }}>
          <Link to="/about" style={{ color: 'black', textDecoration: 'none' }}>About</Link>
        </li>
        <li style={{ marginRight: '10px' }}>
          <Link to="/services" style={{ color: 'black', textDecoration: 'none' }}>Services</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: 'black', textDecoration: 'none' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;   
