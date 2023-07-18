import React, { Fragment } from "react";
import { ICON_LOGO, ICON_SEARCH, ALT_TEXT_LOGO, ALT_TEXT_SEARCH_ICON } from "Common/constants";

const Navbar = () => {
  return (
    <Fragment>
      <div>
        <img src={ICON_LOGO} alt={ALT_TEXT_LOGO} />
        <h1>Todos</h1>
      </div>
      <div>
        <img src={ICON_SEARCH} alt={ALT_TEXT_SEARCH_ICON} />
      </div>
    </Fragment>
  );
};

export default Navbar;
