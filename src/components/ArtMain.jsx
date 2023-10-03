import { ArtImg } from "../constants/ArtImg";
import useMouseScroll from "../constants/useMouseScroll";

const ArtMain = (props) => {
  const { scrollX, getImageIndexInCenter, handleWheelScroll } =
    useMouseScroll(ArtImg);

  const centerImageIndex = getImageIndexInCenter();

  const handleArtClick = (index) => {
    if (index === centerImageIndex) {
      props.toggleView(index);
    }
  };

  return (
    <div id="ArtMain" className="fullpage" onWheel={handleWheelScroll}>
      <div className="content xyzcontent ">
        <div className="bg-text">
          <h1>ILLUST</h1>
          <h1>CHARACTER</h1>
          <h1>DRAWING</h1>
        </div>
        <nav className="art-nav">
          <ul className="art-pagination">
            {ArtImg.map((_, index) => (
              <li
                className={`page ${
                  index === centerImageIndex ? "selected" : ""
                }`}
                key={index}
              ></li>
            ))}
          </ul>
        </nav>
        <div className="art-content">
          <ul
            className="art-list"
            style={{
              transform: `translateX(${scrollX}px)`,
            }}
          >
            {ArtImg.map((image, index) => (
              <div
                className={`art ${
                  index === centerImageIndex ? "selected" : ""
                }`}
                key={index}
                onClick={() => handleArtClick(index)} // 클릭 이벤트 핸들러 호출
              >
                <div className="art-img">
                  <img
                    src={`https://inahk.github.io/inahk-home/art-img/${image.file}`}
                    alt={`Art ${index}`}
                  />
                </div>
                <div className="art-data">
                  <h6 className="art-title">{image.title}</h6>
                  <p className="art-date">{image.date}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArtMain;
