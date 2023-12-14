import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  const goToMain = () => {
    navigate("/");
  };

  const goToIntroduce = () => {
    navigate("/introduce");
  };

  return (
    <>
      <div className="headerContainer">
        <div className="headerWrapper">
          <div className="logoWrapper">
            <img
              src={process.env.PUBLIC_URL + "/img/logo_white.png"}
              alt="logo image"
              onClick={goToMain}
            />
          </div>
          <div className="navWrapper">
            <span onClick={goToIntroduce}>센터소개</span>
            <span>콘텐츠</span>
            <span>문의하기</span>
          </div>
          <div className="loginWrapper">
            <span>로그인</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
