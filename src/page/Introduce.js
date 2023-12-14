import React from "react";
import "./Introduce.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const navigate = useNavigate();

  const goToEq = () => {
    navigate("/equipment");
  };

  return (
    <>
      <div className="introContainer">
        <Header />
        <div className="introWrapper">
          <div className="introTextWrapper">
            <p>더블엠소셜컴퍼니</p>
            <p>Digital Smart Education Center</p>
            <p>
              디지털스마트교육센터는
              <br />
              메타버스 플랫폼을 기반으로
              <br />
              다양한 교육 컨텐츠들을 개발하고 있습니다.
            </p>
          </div>
          <div className="introContentsWrapper1">
            <div className="introContentsDiv1">
              <img src={`${process.env.PUBLIC_URL}/img/certi.png`} alt="img" />
              <p>다양한 특허 및 인증</p>
              <p>국내외 특허인증</p>
              <button className="viewMoreButton">VIEW MORE →</button>
            </div>
            <div className="introContentsDiv2">
              <img src={`${process.env.PUBLIC_URL}/img/hand.png`} alt="img" />
              <p>파트너쉽 문의 및 협업문의</p>
              <p>
                투자관련 등
                <br />
                파트너쉽 문의
              </p>
              <button className="viewMoreButton">VIEW MORE →</button>
            </div>
          </div>
          <div className="introContentsWrapper2">
            <div className="introContentsDiv1">
              <img src={`${process.env.PUBLIC_URL}/img/media.png`} alt="img" />
              <p>다양한 콘텐츠 및 장비</p>
              <p>
                VR기반 컨텐츠
                <br />
                립모션, MetaQuest, Vive 등
              </p>
              <button onClick={goToEq} className="viewMoreButton">
                VIEW MORE →
              </button>
            </div>
            <div className="introContentsDiv2">
              <img src={`${process.env.PUBLIC_URL}/img/code.png`} alt="img" />
              <p>각종 콘텐츠 개발</p>
              <p>
                메타버스 특수교육 컨텐츠
                <br />
                메타버스 플랫폼 개발
              </p>
              <button className="viewMoreButton">VIEW MORE →</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduce;
