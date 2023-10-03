import React from "react";
import { useAppContext } from "../constants/AppContext";
import { Link } from "react-router-dom";
import { Nav } from "../constants/Index";

const Footer = () => {
  const { currentPage, setCurrentPage } = useAppContext();

  const handleLinkClick = (index) => {
    setCurrentPage(index);
  };

  return (
    <footer id="footer">
      <nav id="nav" className="footer-nav">
        <ul className="nav-list">
          {Nav.map((nav, index) => (
            <li key={index} className={index === currentPage ? "selected" : ""}>
              <Link to={nav.url} onClick={() => handleLinkClick(index)}>
                <span>{nav.letter}</span>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
