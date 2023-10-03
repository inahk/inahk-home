import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import ArtMain from "./ArtMain";
import ArtDetail from "./ArtDetail";
import "../App.scss";

function ArtWithTransition(props) {
  const [showArtDetail, setShowArtDetail] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const nodeRefMain = useRef(null);
  const nodeRefDetail = useRef(null);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const toggleView = (index) => {
    setShowArtDetail(!showArtDetail);
    setSelectedImageIndex(index);
    console.log(showArtDetail, setShowArtDetail);
  };

  return (
    <div id="Art">
      <CSSTransition
        nodeRef={nodeRefMain}
        in={!showArtDetail}
        timeout={2400}
        classNames="section"
        unmountOnExit={false}
      >
        <div ref={nodeRefMain}>
          <ArtMain toggleView={toggleView} />
        </div>
      </CSSTransition>

      <div className="back-nav">
        <div className="back-arrow" onClick={goBack}></div>
      </div>

      <CSSTransition
        nodeRef={nodeRefDetail}
        in={showArtDetail !== null && showArtDetail}
        timeout={2400}
        classNames="section"
        unmountOnExit={true}
      >
        <div ref={nodeRefDetail}>
          <ArtDetail index={selectedImageIndex} toggleView={toggleView} />
        </div>
      </CSSTransition>
    </div>
  );
}

const Art = () => {
  return <ArtWithTransition></ArtWithTransition>;
};

export default Art;
