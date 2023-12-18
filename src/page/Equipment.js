import React from "react";
import "./Equipment.css";
import Header from "../components/Header";

const Equipment = () => {

  const goToHaptic = () => {
    window.open("https://www.manus-meta.com/products/xsens-metagloves", "_blank");
  }

  const goToMeta = () => {
    window.open("https://www.meta.com/kr/quest/quest-3/", "_blank");
  }

  const goToLeap = () => {
    window.open("https://www.ultraleap.com/", "_blank");
  }

  return (
    <>
      <div className="equipmentContainer">
        <Header />
        <div className="equipmentWrapper">
          <div className="eqTextWrapper">
            <p>제품소개</p>
            <p>We Using This Products</p>
            <p>
              다양한 장비들을 사용하여
              <br />
              메타버스 컨텐츠들을 개발하고 있습니다.
            </p>
          </div>
          <div className="eqContentWrapper">
            <div onClick={goToHaptic} className="hapticWrapper">
                <p>Haptic Device</p>
              <img src={`${process.env.PUBLIC_URL}/img/haptic.png`} alt='img' />
            </div>
            <div onClick={goToMeta} className="metaWrapper">
            <p>MetaQuest</p>
              <img src={`${process.env.PUBLIC_URL}/img/meta.png`} alt='img' />
            </div>
            <div onClick={goToLeap} className="leapWrapper">
            <p>LeapMotion</p>
              <img src={`${process.env.PUBLIC_URL}/img/leap.png`} alt='img' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Equipment;
