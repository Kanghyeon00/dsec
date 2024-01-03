import React, { useState, useEffect, useMemo } from "react";
import "./Main.css";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';

const Main = () => {

  const navigate = useNavigate();

  const handleWheel = (event) => {
    // 마우스 휠을 아래로 돌렸을 때 URL을 변경합니다.
    if (event.deltaY > 0) {
      navigate('/introduce'); // 다음 페이지로 이동하도록 설정
    } else if (event.deltaY < 0) {
      navigate('/contact');
    }
  };

  useEffect(() => {
    const handleWheelEvent = (event) => handleWheel(event);

    // 마우스 휠 이벤트에 대한 이벤트 리스너 추가
    window.addEventListener('wheel', handleWheelEvent);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('wheel', handleWheelEvent);
    };
  }, [handleWheel, navigate]);

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
