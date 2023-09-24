import React, { useEffect } from "react";

const HomeNav = [
  {
    title: (
      <>
        <span>{"A"}</span>rt
      </>
    ),
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
  useEffect(() => {
    const elem = document.querySelector(".nav-content");
    elem.addEventListener("mousemove", parallax);

    return () => {
      elem.removeEventListener("mousemove", parallax);
    };

    function parallax(e) {
      console.log(elem.style);
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth = `${(_mouseX - _w) * 0.01}px, ${(_mouseY - _h) * 0.01}px, 0`;
      let _depthX = `${(_mouseX - _w) * 0.01}deg`; // X 축 회전
      let _depthY = `${(_mouseY - _h) * 0.01}deg`; // Y 축 회전
      let x = _depth;
      console.log(x);
      elem.style.transform = `rotateX(${_depthX}) rotateY(${_depthY}) translate3d(${x})`;

      console.log(elem.style.transform);
    }
  }, []);

  return (
    <div id="home">
      <nav className="home-nav">
        <ul className="nav-list">
          {HomeNav.map((nav, key) => (
            <li className="nav-space" key={key}>
              <div
                className="nav-content"
                style={{ transform: "translate3d(0%, 0%, 0)" }}
              >
                <div className="bg-text">
                  <h2>ILLUST</h2> <h2>CHARACTER</h2> <h2>DRAWING</h2>
                </div>
                <a href={nav.url}>{nav.title}</a>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Intro;
