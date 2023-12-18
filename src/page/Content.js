import React, { useState, useEffect, useMemo } from "react";
import "./Content.css"; // 스타일링을 위한 CSS 파일
import Header from "../components/Header";

const Content = () => {
  const images = useMemo(
    () => [
      `${process.env.PUBLIC_URL}/img/bg1.png`,
      `${process.env.PUBLIC_URL}/img/bg8.png`,
      `${process.env.PUBLIC_URL}/img/bg9.png`,
      // 필요한 경우 추가 이미지 경로를 배열에 추가합니다.
    ],
    []
  );

  const texts = useMemo(
    () => [
      {
        title: "Education",
        subTitle: "Nursense",
        description: "욕창, 당뇨, 근육주사 등\n간호학생들을 위한 다양한 간호술기 플랫폼",
      },
      // 다른 이미지에 대한 텍스트 정보 추가
      {
        title: "다른 타이틀",
        subTitle: "다른 서브타이틀",
        description: "다른 설명",
      },
            {
        title: "또 다른 타이틀",
        subTitle: "또 다른 서브타이틀",
        description: "또 다른 설명",
      },
      // 다른 이미지에 대한 텍스트 정보 추가
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
      preloadImages.forEach((img) => (img.onload = null));
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
  const currentText = texts[currentImageIndex];

  return (
    <>
      <div
        className="contentContainer"
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        <Header isContentPage={true} />
        <div className="contentWrapper">
          <img
            className="contentFront"
            src={`${process.env.PUBLIC_URL}/img/contentFront.jpg`}
            alt="img"
          />
          <div className="contentTextWrapper">
            <p>{currentText.title}</p>
            <p>{currentText.subTitle}</p>
            <p>{currentText.description}</p>
            <button className="contentButton">VIEW MORE →</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
