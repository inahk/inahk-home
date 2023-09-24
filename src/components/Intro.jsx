import React from "react";

const HomeNav = [
  {
    title: "ART",
    url: "#art",
  },
  {
    title: "DESIGN",
    url: "#design",
  },

  {
    title: "COMMISION",
    url: "#commision",
  },
];

const Intro = () => {
  return (
    <div Id="home">
      <nav className="home-nav">
        <ul className="nav-list">
          {HomeNav.map((nav, key) => (
            <li key={key}>
              <div className="bg-text">
                <h2>ILLUST</h2> <h2>CHARACTER</h2> <h2>DRAWIJNG</h2>
              </div>
              <a href={nav.url}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Intro;
