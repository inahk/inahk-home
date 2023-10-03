import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; // useNavigate 추가
import { ArtImg } from "../constants/ArtImg";
import ArtMain from "./ArtMain";

const ArtDetail = (props) => {
  const imageDetails = ArtImg[props.index] || {
    title: "Default Title",
    date: "Default Date",
    description: "Default Description",
    color: "Default Color",
    file: "default-image.jpg",
  };

  const handleBack = () => {
    props.toggleView(props.index); // toggleView 함수를 호출하여 ArtMain으로 다시 전환
  };

  return (
    <div
      id="ArtDetail"
      className="fullpage xzycontent"
      style={{ backgroundColor: imageDetails.color }}
    >
      <div className="back-nav">
        <div className="back-arrow" onClick={handleBack}></div>
      </div>
      <div className="detail-data">
        <div className="detail-title">
          <h2 className="art-title">{imageDetails.title}</h2>
          <h5 className="art-date">{imageDetails.date}</h5>
        </div>
        <div className="detail-description">
          <h3>{imageDetails.description}</h3>
        </div>
      </div>
      <div className="detail-img">
        <div className="img-screen">
          <div className="art-img">
            <img
              src={`/art-img/${imageDetails.file}`}
              alt={`Art ${imageDetails.title}`}
            />
          </div>
        </div>
      </div>
      <div className="detail-guest">
        <div className="guest-title">
          <h6>Guest</h6>
        </div>
        <div className="message-list">
          <div className="message">
            <h5>리뷰 내용입니다.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtDetail;
