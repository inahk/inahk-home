import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../constants/AppContext";
import { Nav } from "../constants/Index";

const Home = () => {
  const { currentPage, setCurrentPage } = useAppContext();

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage < 1 ? prevPage + 1 : prevPage));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  const parallax = (e) => {
    const _w = window.innerWidth / 2;
    const _h = window.innerHeight / 2;

    const elems = document.querySelectorAll(".nav-content");
    elems.forEach((elem) => {
      const _mouseX = e.clientX;
      const _mouseY = e.clientY;
      const _depthX = `${(_mouseX - _w) * 0.01}deg`;
      const _depthY = `${(_mouseY - _h) * 0.01}deg`;
      const _depth = `${(_mouseX - _w) * 0.01}px, ${
        (_mouseY - _h) * 0.01
      }px, 0`;

      elem.style.transform = `rotateX(${_depthX}) rotateY(${_depthY}) translate3d(${_depth})`;
    });
  };

  useEffect(() => {
    const elems = document.querySelectorAll(".nav-content");
    elems.forEach((elem) => {
      elem.addEventListener("mousemove", parallax);
    });

    return () => {
      elems.forEach((elem) => {
        elem.removeEventListener("mousemove", parallax);
      });
    };
  }, []);

  return (
    <div id="Home" className="fullpage">
      <nav className="home-nav">
        <ul
          className="nav-list"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {Nav.map((nav, key) => (
            <li className="nav-space xyzcontent" key={key}>
              <div className="nav-content xyzcontent">
                <div className="bg-text">
                  <h1>{nav.keyword1}</h1>
                  <h1>{nav.keyword2}</h1>
                  <h1>{nav.keyword3}</h1>
                </div>
                <div className="nav-title">
                  <NavLink to={nav.url}>
                    <span style={{ color: nav.color }}>{nav.letter}</span>
                    {nav.title}
                  </NavLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="pre-arrow"
        onClick={prevPage}
        style={{ display: currentPage === 0 ? "none" : "block" }}
      ></div>
      <div
        className="next-arrow"
        onClick={nextPage}
        style={{ display: currentPage === 1 ? "none" : "block" }}
      ></div>
    </div>
  );
};

export default Home;
