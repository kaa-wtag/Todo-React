import React from "react";
import { ICON_LOGO, ICON_SEARCH, ALT_TEXT_LOGO, ALT_TEXT_SEARCH_ICON } from "Common/constants";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={ICON_LOGO} alt={ALT_TEXT_LOGO} />
        <h1 className="navbar__title">Todos</h1>
      </div>
      <div className="navbar__search-button-container">
        <img src={ICON_SEARCH} alt={ALT_TEXT_SEARCH_ICON} />
      </div>
    </div>
  );
};

export default Navbar;
