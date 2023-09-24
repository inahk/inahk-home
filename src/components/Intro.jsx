import React, { useState, useEffect, useRef } from "react";
import { Nav } from "../constants";

const Intro = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const elemRefs = useRef([]);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage < 2 ? prevPage + 1 : prevPage));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  useEffect(() => {
    const elems = elemRefs.current;

    const parallax = (e) => {
      elems.forEach((elem) => {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth = `${(_mouseX - _w) * 0.01}px, ${
          (_mouseY - _h) * 0.01
        }px, 0`;
        let _depthX = `${(_mouseX - _w) * 0.01}deg`;
        let _depthY = `${(_mouseY - _h) * 0.01}deg`;
        let x = _depth;
        elem.style.transform = `rotateX(${_depthX}) rotateY(${_depthY}) translate3d(${x})`;
      });
    };

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
    <div id="home">
      <nav className="home-nav">
        <ul
          className="nav-list"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
          }}
        >
          {Nav.map((nav, key) => (
            <li className="nav-space" key={key}>
              <div
                className="nav-content"
                style={{ transform: "" }}
                ref={(el) => (elemRefs.current[key] = el)}
              >
                <div className="bg-text">
                  <h2>{nav.keyword1}</h2> <h2>{nav.keyword2}</h2>
                  <h2>{nav.keyword3}</h2>
                </div>
                <a href={nav.url}>{nav.title}</a>
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="left-arrow"
        onClick={prevPage}
        style={{ display: currentPage === 0 ? "none" : "block" }}
      ></div>
      <div
        className="right-arrow"
        onClick={nextPage}
        style={{ display: currentPage === 2 ? "none" : "block" }}
      ></div>
    </div>
  );
};

export default Intro;
