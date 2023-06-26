import React from 'react';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Todos</h1>
      </div>
      <div className="search-button-container">
        <img src={search} alt="Search" />
      </div>
    </div>
  );
};

export default Navbar;