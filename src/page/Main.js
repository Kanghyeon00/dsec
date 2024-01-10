import React, { useState, useEffect, useMemo } from "react";
import "./Main.css";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';

const Main = () => {

  const navigate = useNavigate();

  const images = useMemo(
    () => [
      `${process.env.PUBLIC_URL}/img/bg1.png`,
      `${process.env.PUBLIC_URL}/img/bg8.png`,
      `${process.env.PUBLIC_URL}/img/bg9.png`,
      // 필요한 경우 추가 이미지 경로를 배열에 추가합니다.
    ],
    []
  );

  useEffect(() => {
    const preloadImages = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    return () => {
      // Cleanup 함수에서 필요하다면 이미지 로딩 작업을 정리할 수 있습니다.
      preloadImages.forEach((img) => img.onload = null);
    };
  }, [images]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const currentImage = images[currentImageIndex];

  return (
    <>
      <div className="mainContainer">
        <div className="mainBgWrapper">
        <div className="backgroundVideo">
            <video autoPlay loop muted playsInline className="video">
              <source
                src={`${process.env.PUBLIC_URL}/video/mainVideo.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <Header />
          <div className="mainTextWrapper">
            <p>DoubleM Social Company</p>
            <p>메타버스 세상을 여는 기업, 더블엠소셜컴퍼니</p>
            <div className="scrollWrapper">
              <img src={`${process.env.PUBLIC_URL}/img/scroll-ani.gif`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
