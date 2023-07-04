import React from "react";
import logo from "Assets/images/logo.png";
import search from "Assets/images/search.png";

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
