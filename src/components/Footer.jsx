import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../constants";

const Footer = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <footer id="footer">
      <nav id="nav" className="footer-nav">
        <ul className="nav-list">
          {Nav.map((nav, index) => (
            <li key={index} className={index === currentPage ? "selected" : ""}>
              <Link to={nav.url}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
