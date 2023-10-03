import { useState, useEffect } from "react";

const useMouseScroll = (Data) => {
  // CSS에서 사용하는 max() 함수
  const cssValue = "max(468px, 39vh)";

  // CSS 값에서 픽셀 값 추출
  const matches = cssValue.match(/(\d+)px/g);
  const pixelValue = matches ? parseFloat(matches[0]) : 0;

  const [scrollX, setScrollX] = useState(0);

  const getImageIndexInCenter = () => {
    return Math.round(-scrollX / pixelValue);
  };

  const handleWheelScroll = (e) => {
    const scrollValue = e.deltaY;

    let newScrollX = scrollX - scrollValue * 2.4;

    newScrollX = Math.round(newScrollX / pixelValue) * pixelValue;

    if (newScrollX > 0) {
      newScrollX = 0;
    } else if (newScrollX < -((Data.length - 1) * pixelValue)) {
      newScrollX = -((Data.length - 1) * pixelValue);
    }

    setScrollX(newScrollX);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheelScroll);
    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
    };
  }, [scrollX]);

  // 커스텀 훅에서 이벤트 핸들러와 스크롤 값 반환
  return { scrollX, getImageIndexInCenter, handleWheelScroll };
};

export default useMouseScroll;
