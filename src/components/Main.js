import React, { useState, useEffect } from "react";
import "./Main.css";
import Header from "./Header";
import bgImg1 from "../bgimg/bg1.png";
import bgImg2 from "../bgimg/bg8.png";
import bgImg3 from "../bgimg/bg9.png";

const Main = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    bgImg1,
    bgImg2,
    bgImg3,
    // 추가적인 이미지 경로들을 필요에 따라 배열에 추가합니다.
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 interval을 정리합니다.
  }, [images.length]);

  const currentImage = images[currentImageIndex];

  return (
    <>
      <div className="mainContainer">
        <div className="mainBgWrapper" style={{ backgroundImage: `url(${currentImage})` }}>
          <Header />
          <div className="mainTextWrapper">
            <p>Digital Smart Education Center</p>
            <p>교육의 혁신, 디지털스마트교육센터</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
