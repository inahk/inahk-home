import React from "react";

const FooterNav = [
  {
    title: "HOME",
    url: "#main",
  },
  {
    title: "ART",
    url: "#art",
  },
  {
    title: "COMMISION",
    url: "#commision",
  },
  {
    title: "DESIGN",
    url: "#design",
  },
];

const Footer = () => {
  return (
    <footer id="footer">
      <nav id="nav" className="footer-nav">
        <ul className="nav-list">
          {FooterNav.map((nav, key) => (
            <li key={key}>
              <a href={nav.url}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
