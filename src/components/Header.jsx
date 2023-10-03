import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="header-inner">
        <div className="header-logo">
          <Link to="/">INAHK</Link>
        </div>
        <div className="header-info"></div>
      </div>
    </header>
  );
};

export default Header;
