import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
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

  return (
    <>
      <div className="headerContainer">
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
            <span>Content</span>
            <span>Portfolio</span>
            <span onClick={goToContact}>Contact</span>
          </div>
          <div className="loginWrapper">
            <span>Login</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
