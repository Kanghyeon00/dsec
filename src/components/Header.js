import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ isContentPage }) => {
  const navigate = useNavigate();
  
  const goToMain = () => {
    navigate("/");
  };

  const goToIntroduce = () => {
    navigate("/introduce");
  };

  const goToContact = () => {
    navigate("/contact");
  };

  const goToContent = () => {
    navigate("/content");
  };

  const goToPortfolio = () => {
    navigate("/portfolio");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className={`headerContainer ${isContentPage ? 'contentHeader' : ''}`}>
        <div className="headerWrapper">
          <div className="logoWrapper">
            <img
              src={process.env.PUBLIC_URL + "/img/logo_white.png"}
              alt="logoImage"
              onClick={goToMain}
            />
          </div>
          <div className="navWrapper">
            <span onClick={goToIntroduce}>About Us</span>
            <span onClick={goToContent}>Content</span>
            <span onClick={goToPortfolio}>Portfolio</span>
            <span onClick={goToContact}>Contact</span>
          </div>
          <div className="loginHeaderWrapper">
            <span onClick={goToLogin}>Login</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
