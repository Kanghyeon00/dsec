import React, { useEffect, useState } from "react";
import "./Content.css"; // 스타일링을 위한 CSS 파일
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Content = () => {

  const navigate = useNavigate();

  const goToNursense = () => {
    window.open('https://www.nursense.kr/')
  }

  return (
    <>
      <div className='contentContainer'>
      <div className="backgroundVideo">
            <video autoPlay loop muted playsInline className="video">
              <source
                src={`${process.env.PUBLIC_URL}/video/coding.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        <Header />
        <div className="contentWrapper">
          <div className="contentTitle">
            <p>What do we do?</p>
            <span>메타버스 플랫폼 제작 및 홈페이지 제작</span>
            <img src={`${process.env.PUBLIC_URL}/img/scroll-ani.gif`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
