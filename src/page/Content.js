import React, { useEffect, useState } from "react";
import "./Content.css"; // 스타일링을 위한 CSS 파일
import Header from "../components/Header";

const Content = () => {

  const goToNursense = () => {
    window.open('https://www.nursense.kr/')
  }

  const contentData = [
    {
      title: "Create",
      subTitle: "ZEPETO",
      description: "월드제작을 통한 3D에 대한 이해와 제작능력 향상",
      imgSrc: `${process.env.PUBLIC_URL}/img/zepeto.png`,
      buttonComponent: <button className="contentButton">VIEW MORE →</button>
    },
    // 다른 이미지에 대한 텍스트 정보 추가
    {
      title: "Education",
      subTitle: "Nursense",
      description: "간호학과 학생들을 위한 간호 시뮬레이션 플랫폼",
      imgSrc: `${process.env.PUBLIC_URL}/img/nursense.png`,
      buttonComponent: <button onClick={goToNursense} className="contentButton">VIEW MORE →</button>
    },
    {
      title: "Event",
      subTitle: "VR체험 행사",
      description: "VR대여부터 행사진행까지 한번에",
      imgSrc: `${process.env.PUBLIC_URL}/img/vr.png`,
      buttonComponent: <button className="contentButton">VIEW MORE →</button>
    },
    {
      title: "Education",
      subTitle: "화재안전교육",
      description: "일상 속 화재상황에 대처하는 방법",
      imgSrc: `${process.env.PUBLIC_URL}/img/fire.png`,
      buttonComponent: <button className="contentButton">VIEW MORE →</button>
    },
    {
      title: "Education",
      subTitle: "재난 보건 안전교육",
      description: "재난상황에 간호사는 무엇을 해야 할까",
      imgSrc: `${process.env.PUBLIC_URL}/img/flood.png`,
      buttonComponent: <button className="contentButton">VIEW MORE →</button>
    },
  ];

  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContentIndex((prevIndex) =>
        prevIndex === contentData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [contentData]);

  const currentContent = contentData[currentContentIndex];

  return (
    <>
      <div className='contentContainer'>
        <Header isContentPage={true} />
        <div className="contentWrapper">
          <div className="contentLeft">
            <img src={`${process.env.PUBLIC_URL}/img/contentFront.jpg`} alt='img' />
            <div className="contentTextWrapper">
            <h2>{currentContent.title}</h2>
              <h1>{currentContent.subTitle}</h1>
              <p>{currentContent.description}</p>
              {currentContent.buttonComponent}
            </div>
          </div>
          <div className="contentRight">
          <img src={currentContent.imgSrc} alt='img' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
