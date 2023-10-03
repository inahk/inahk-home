import React from "react";
import { useNavigate } from "react-router-dom";
import { DesignImg } from "../constants/DesignImg";
import useMouseScroll from "../constants/useMouseScroll";

const Design = () => {
  const navigate = useNavigate();
  const { scrollX, getImageIndexInCenter, handleWheelScroll } =
    useMouseScroll(DesignImg);

  const centerImageIndex = getImageIndexInCenter();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div id="Design" className="fullpage" onWheel={handleWheelScroll}>
      <div className="content  xyzcontent">
        <div className="bg-text">
          <h1>ILLUST</h1>
          <h1>CHARACTER</h1>
          <h1>DRAWING</h1>
        </div>
        <nav className="design-nav">
          <ul className="design-pagination">
            {DesignImg.map((_, index) => (
              <li
                className={`page ${
                  index === centerImageIndex ? "selected" : ""
                }`}
                key={index}
              ></li>
            ))}
          </ul>
        </nav>
        <div className="design-content">
          <ul
            className="design-list"
            style={{
              transform: `translateX(${scrollX}px)`,
            }}
          >
            {DesignImg.map((image, index) => (
              <div
                className={`design ${
                  index === centerImageIndex ? "selected" : ""
                }`}
                key={index}
              >
                <div className="design-img">
                  <img
                    src={`design-img/${image.file}`}
                    alt={`design ${index}`}
                  />
                </div>
                <div className="design-monitor"></div>
                <div className="art-data">
                  <h6 className="art-title">{image.title}</h6>
                  <p className="art-date">{image.date}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="back-nav">
        <div className="back-arrow" onClick={goBack}></div>
      </div>
    </div>
  );
};

export default Design;
